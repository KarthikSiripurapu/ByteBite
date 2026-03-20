import mongoose from "mongoose";

export const connectDB = async ()=> {
   await mongoose.connect('mongodb+srv://karthik_db_user:ss242526@cluster0.rx4mcwj.mongodb.net/food-del').then(()=>console.log("DB Connected")); 
}