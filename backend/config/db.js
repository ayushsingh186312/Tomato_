import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv).then(()=>console.log("DB Connected"));
}
