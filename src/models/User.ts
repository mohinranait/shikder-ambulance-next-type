
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    name : {
        firstName: {
            type: String,
            required: true,
            trim:true,
        },
        lastName: {
            type: String,
            required: true,
            trim:true,
        },
    },
    email: {
        type: String,
        required: true,
        trim:true,
        unique: true,
    },
    
    password: {
        type: String,
        required: true,
        trim:true,
    },
    profile:{
        type: mongoose.Types.ObjectId ,
        ref: "Media"
    },
    role:{
        type: String,
        default:"User",
        enum:['Admin',"User"]
    },
    status:{
        type: String,
        default:"Active",
        enum: ['Active', 'Pending', 'Banned'],
    }
});


export default mongoose.models.User || mongoose.model("User", userSchema)
