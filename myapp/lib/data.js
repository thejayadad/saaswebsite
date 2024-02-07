'use server'
import connectDB from "./database"
import Post from "@/models/Post"

export const getPosts = async () => {
    connectDB()
    try {
        const posts = await Post.find({})
        return posts
    } catch (error) {
        console.log("Error " + error);
        return { errMsg: error.message };        
    }
}