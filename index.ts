import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import { router } from "./src/router/router";
dotenv.config()
const PORT = 3000;

const app = express();

const DB_LOCALHOST = 'mongodb+srv://admin:admin123@cluster0.ndyjwui.mongodb.net/Book-Management';
mongoose.connect(`${DB_LOCALHOST}`).then(()=>{
    console.log('DB connect success !');
})
.catch(e =>{
    console.log(e);
})

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('',router)


app.listen(PORT, ()=>{
    console.log(`App is running port http://localhost:${PORT}`);
})