import mongoose from "mongoose"
require('dotenv').config()

const connectMongoDB = async () => {
    try {
        //mongoose.connect(process.env.MONGODB_URI);
        mongoose.connect("mongodb+srv://ethan:yk26vKeIrvs1F4Lv@msi-hackathon.6ubvlip.mongodb.net/?retryWrites=true&w=majority");
        console.log("Connected to mongodb");
    }
    catch (error) {
        console.log(error);
    }
}

export default connectMongoDB;