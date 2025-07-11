
import mongoose from "mongoose"

const commentSchema = new mongoose.Schema({
    autor:{
        type: mongoose.Types.ObjectId,
        ref:"User",
    },
    name: {
        type: String,
    },
    postId:{
        type: mongoose.Types.ObjectId,
        ref:"Post",
    },
    content:{
        type: String,

    },
    star:{
        type: Number,
        default:5,
    },
},{timestamps:true})

export default mongoose.models.Comment || mongoose.model('Comment', commentSchema)

