import express from "express";
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB  from "./mongodb/connect.js";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello From DALL-E  !");
});

const startServer =async()=>{
    try { 
        connectDB(); 
        app.listen(8080, () => {
            console.log(`Server is running on port 8080` );
        });
    } catch (error) {
        console.error(error);
    }
}

startServer();