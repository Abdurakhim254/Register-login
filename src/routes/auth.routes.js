import express  from "express";
import {registercontroller,logincontroller} from "../controllers/index.js"
export const router=express.Router()

router.post("/register",registercontroller)

router.post("/login",logincontroller)