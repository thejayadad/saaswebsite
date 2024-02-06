
const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
    title: String,  
    description: String,
    secure_url: String,

})

mongoose.models = {}
module.exports = mongoose.model("Post", postSchema)