'use server'
import connectDB from "./database"
import Post from "@/models/Post"

export const getPosts = async () => {
    connectDB()
    try {
        const posts = await Post.find({})
        const formattedPosts = posts.map(post => {
            const { _id, ...rest } = post.toObject(); 
            return { _id: _id.toString(), ...rest }; 
        });
        return formattedPosts;
    } catch (error) {
        console.log("Error " + error);
        return { errMsg: error.message };        
    }
}