import mongoose from "mongoose"
require('dotenv').config()

const connectMongoDB = async () => {
    try {
        mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
        console.log("Connected to mongodb");
    }
    catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;