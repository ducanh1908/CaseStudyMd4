import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
const PORT = 3000;

const app = express();

const DB_LOCALHOST = 'mongodb://localhost:27017/book_management';
mongoose.connect(`${DB_LOCALHOST}`).then(()=>{
    console.log('DB connect success !');
})
.catch(e =>{
    console.log(e);
})

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());


app.listen(PORT, ()=>{
    console.log(`App is running port http://localhost:${PORT}`);
})