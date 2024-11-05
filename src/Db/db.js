import mongoose, { mongo } from "mongoose";
import { application } from "../config/index.js";
const schema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        // maxlength:[20,"Maximum 20ta harf yoki belgi yozilishi mumkin"],
        // minlength:[3,"Minimum 5 ta harf yoki belgi yozilishi mumkin"]
    },
    email:{
        type:String,
        required:true,
        // maxlength:[20,"Maximum 20ta harf yoki belgi yozilishi mumkin"],
        // minlength:[10,"Minimum 5 ta harf yoki belgi yozilishi mumkin"]
    },
    password:{
        type:String,
        required:true,
        // maxlength:[20,"Maximum 20ta harf yoki belgi yozilishi mumkin"],
        // minlength:[5,"Minimum 5 ta harf yoki belgi yozilishi mumkin"]
    }
})
mongoose.connect(application.uri)

export const User=mongoose.model("user",schema)