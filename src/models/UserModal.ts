import  { model, models, Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        firstName: {
            type: String,
        },
        lastName: {
            type: String,
        },
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },

    status: {
        type: String,
        enum:['Active','Pending',"Denided"]
    }
})


const User  = models.User ||   model('User', userSchema);

export default User;