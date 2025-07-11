import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    fileType: {
        type: String,
        default: 'post',
        enum: ['post', "profile", 'cover'],
    },
    fileUrl: {
        type: String,
    },
    width: {
        type: Number,
    },
    height: {
        type: Number,
    },
    extension: {
        type: String,
    },
    public_id: {
        type: String,
    },
    secure_url: {
        type: String,
    },
    size: {
        type: Number,
    }
}, { timestamps: true });

export default mongoose.models.Media || mongoose.model("Media", fileSchema)

