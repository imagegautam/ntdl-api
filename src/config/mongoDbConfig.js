import mongoose from "mongoose";
export const connectMongo = () => {
    const uri = "mongodb://localhost:27017/feb-ntdl"
    mongoose
    .connect(uri)
    .then(()=> console.log("DB Connected"))
    .catch((error=> console.log(error)));
};