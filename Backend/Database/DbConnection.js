import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

const DBConnection = async ()=>{
    try {
        await mongoose.connect(MONGODB_URI)
        console.log("Database Connected Successfully");
    } catch (error) {
        console.log("Database not Connected");
    }
}

export default DBConnection;