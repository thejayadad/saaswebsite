'use server'
import path from 'path';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import os from 'os';
import cloudinary from 'cloudinary';
import connectDB from "./database";
import Post from "@/models/Post";
import { revalidatePath } from 'next/cache';

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

async function savePhotosToLocal(formData) {
    const file = formData.get('file');
    const title = formData.get('title');
    const description = formData.get('description');
    console.log("file " + file);
    if (!file) {
        throw new Error('No file uploaded');
    }

    const data = await file.arrayBuffer();
    const buffer = Buffer.from(data);

    const name = uuidv4();
    const ext = file.type.split('/')[1];

    const tempdir = os.tmpdir();
    const uploadDir = path.join(tempdir, `/${name}.${ext}`);

    await fs.writeFile(uploadDir, buffer);

    return { filepath: uploadDir, filename: file.name, title: title, description: description };
}

async function uploadPhotosToCloudinary(newFiles) {
    const multiplePhotosPromise = newFiles.map(file => (
        cloudinary.v2.uploader.upload(file.filepath)
    ))

    return await Promise.all(multiplePhotosPromise);
}

export async function createPost(formData) {
    connectDB()
    try {
        const newPost = await savePhotosToLocal(formData);
        const photos = await uploadPhotosToCloudinary([newPost]); 
        const secure_url = photos[0].secure_url; 
        const title = newPost.title;
        const description = newPost.description;
        const public_id = photos[0].public_id; 
        const post = new Post({
            secure_url,
            public_id,
            title,
            description
        });
        await post.save();

        await fs.unlink(newPost.filepath);
        revalidatePath("/dashboard")

        return { msg: 'Post created successfully' };
    } catch (error) {
        console.log("Error " + error);
        return { errMsg: error.message };
    }
}

export async function deletePost(public_id){
    connectDB()
    try {
        await Promise.all([
            Post.findOneAndDelete({ public_id }), 
            cloudinary.v2.uploader.destroy(public_id)
        ]);
        revalidatePath("/dashboard");
        return { msg: 'Delete Success!' };
    } catch (error) {
        console.log("error " + error);
        return { errMsg: error.message };
    }
}

