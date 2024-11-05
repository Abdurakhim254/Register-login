import { User } from "../Db/index.js"

export const registercontroller=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const result=await User({name,email,password})
        await result.save()
        res.status(200).send({message:"yaratildi",
        name,email,password
        })
    } catch (error) {
        res.status(400).send("Ro'yxatdan o'tishda kamchilik bor")
    }
}
export const logincontroller=async(req,res)=>{
    try {
        const {email,password}=req.body
        const find=await User.find({email:email,password:password})
        if(find.length==1){
            res.status(200).send({message:"kirildi",data:find})
        }else{
            res.status(300).send({message:"kirilmadi"})
        }
    } catch (error) {
        res.status(400).send("Login qilishda xatolik")
    }
}