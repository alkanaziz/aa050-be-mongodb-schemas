import mongoose from "mongoose";

const connectDB = async (url, app, port) => {
    try {
        await mongoose.connect(url),
        console.log(`MongoDB connected`)
        app.listen(port, () => console.log(`Server is running on ${port}`))
    } catch (error) {
        console.error(`MongoDB connection failed: ${error.message}`);        
    }
}

export default connectDB;


