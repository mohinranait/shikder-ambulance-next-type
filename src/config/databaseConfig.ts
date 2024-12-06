import mongoose from "mongoose";

const connectDb = async () : Promise<void> => {
    try {
        const dbUrl = process.env.NEXT_PUBLIC_DB_URL;
        if(!dbUrl) {
            throw new Error("MongoDB connection string is not defined in the environment variables")
        };
        await mongoose.connect(dbUrl)
        console.log("Connect DB");
        
    } catch (error) {
        console.log(error);
        
    }    
}

export default connectDb;