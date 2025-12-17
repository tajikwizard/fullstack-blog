const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"User"
        },
        description:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required:true,
            enum:["reacjs","html","css","nodejs", "js","other"],
        },
        image:{
            type:String,
            required:true
        },
    },
    {
            timestamps:true
    }
)

const Post = mongoose.model("Post",commentSchema);
module.exports = Post;