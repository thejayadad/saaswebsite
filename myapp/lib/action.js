'use server'
import path from 'path';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';
import os from 'os';
import cloudinary from 'cloudinary';
import connectDB from "./database";
import Post from "@/models/Post";

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
        const photos = await uploadPhotosToCloudinary([newPost]); // Pass an array with the single photo object
        const secure_url = photos[0].secure_url; // Get the secure_url for the uploaded image
        const title = newPost.title;
        const description = newPost.description;

        const post = new Post({
            secure_url,
            title,
            description
        });
        await post.save();

        await fs.unlink(newPost.filepath);

        return { msg: 'Post created successfully' };
    } catch (error) {
        console.log("Error " + error);
        return { errMsg: error.message };
    }
}
