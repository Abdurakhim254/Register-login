import dotenv from "dotenv"
import path   from "path"
dotenv.config()

const registerpath=path.join(import.meta.dirname,"..","Ejs","Ejs_files","register.ejs")
const loginpath=path.join(import.meta.dirname,"..","Ejs","Ejs_files","login.ejs")
const homepath=path.join(import.meta.dirname,"..","Ejs","Ejs_files","home.ejs")

export const application={
    port:process.env.PORT,
    uri:process.env.URI,
    loginpath,
    registerpath,
    homepath
} 