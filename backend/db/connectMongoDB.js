import mongoose from "mongoose";

export const connectDB = (url) => {
    mongoose.connect(url)
    .then(() => console.log(`MongoDB Connected.`))
    .catch((err) => console.log(err))
}