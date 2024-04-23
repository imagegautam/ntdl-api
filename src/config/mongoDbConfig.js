import mongoose from "mongoose";
export const connectMongo = () => {
    const uri = "mongodb://localhost:27017/feb-ntdl"
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log("DB Connected"))
    .catch((error=> console.log(error)));
};