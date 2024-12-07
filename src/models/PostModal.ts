
import  { model, models, Schema} from "mongoose";

const postSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    title: {
        type: String,
        required:true,
        trim:true,
    },
    slug: {
        type:String,
        trim:true,
    },
    image: {
        featuresImage: {
            type:String,
        },
        thumbnail: {
            type:String,
        },
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
    seoKeyword: {
        type: [String],
    },

},{timestamps:true})

const Post = models.Post ||  model("Post", postSchema);

export default Post;

