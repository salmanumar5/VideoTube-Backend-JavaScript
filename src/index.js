// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: './env'
})

connectDB()
    .then(() =>{
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server listening at port: ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("Mongo DB connection Failed!!", err);
    })




// import express from "express"
// const app = express();

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log("Error: ", error);
//         throw error
//     }
// })()