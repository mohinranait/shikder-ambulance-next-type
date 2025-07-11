

import mongoose from "mongoose"


const postSchema = new mongoose.Schema({
    author: {
        type: mongoose.Types.ObjectId,
        ref: "User",
    },
    postTitle: {
        type: String,
        required:true,
        trim:true,
    },
    shortDescription: {
        type: String,
    },
    slug: {
        type:String,
        trim:true,
    },
    image: {
        featuresImage: {
            type: String,
        },
        thumbnail: {
            type: String
        },
    },
    content:{
        type:String

    },
    contents: [
        {
            priority: {
                type: String,
            },
            content: {
                type: String,
            }
        }
    ],
    status: {
        type:String,
        default:'Publish',
        enum:['Publish',"Unpublish",]
    },
    contactNumber: {
        type:String,
    },
    layouts:{
        banner: Boolean,
        sidebar:{
            type:String,
            default:'posts',
            enum:['posts','comments','author']
        },
        isSidebar:{
            type:String,
            default:'right',
            enum:['right','left','both','none']
        },
        comments:Boolean,
    },
    seoTitle: {
        type: String,
    },
    seoDescription: {
        type: String,
    },
    publishDate:{
        type : Date,
        default: Date.now,
    },
    seoKeyword: {
        type: [String],
    },
    reviews:{
        type: Number,
        default:0,
    }

},{timestamps:true})


export default mongoose.models.Post || mongoose.model("Post", postSchema)


