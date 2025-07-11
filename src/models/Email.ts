
import mongoose from "mongoose";

const collectEmailSchema = new mongoose.Schema({
    fullName: {
        type: String,
    },
    email: {
        type : String,
    },
    phone: {
        type : String,
    },
}, {timestamps:true});

export default mongoose.models.Email || mongoose.model("Email", collectEmailSchema)

