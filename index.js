import express from "express"
import cors from "cors"
import { application } from "./src/config/index.js"
import {router} from "./src/routes/index.js"
const app=express()


app.use(
    cors({
      origin: "*",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
      optionsSuccessStatus: 204,
    })
  );
  


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/register",(req,res)=>{
    res.render(application.registerpath)
})

app.use("/login",(req,res)=>{
    res.render(application.loginpath)
})

app.use("/home",(req,res)=>{
  res.render(application.homepath)
})

app.use("/auth",router)



app.listen(application.port,()=>{
    console.log("Server running on port "+application.port)
})