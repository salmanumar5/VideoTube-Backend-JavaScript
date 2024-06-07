// require('dotenv').config()
import dotenv from "dotenv"
import connectDB from "./db/index.js"
import { app } from "./app.js"

dotenv.config({
    path: './env'
})

const port = process.env.PORT || 8001;

connectDB()
.then(() => {
    const server = app.listen(port, () => {
        console.log(`Server listening at port: ${port}`);
    });

    server.on('error', (err) => {
        if (err.code === 'EACCES') {
            console.error(`Port ${port} requires elevated privileges`);
        } else if (err.code === 'EADDRINUSE') {
            console.error(`Port ${port} is already in use`);
        } else {
            console.error(`Server error: ${err}`);
        }
        process.exit(1);
    });
})
.catch((err) => {
    console.error("MongoDB connection Failed!!", err);
});