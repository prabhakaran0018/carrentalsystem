import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();
const DBconnector = async () => {
    const MONGO_URI = "mongodb+srv://prabhakarans2022cse:Prabha45@prabha.9ofmsu3.mongodb.net/";
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); 
    }
};
 
export default DBconnector; 
