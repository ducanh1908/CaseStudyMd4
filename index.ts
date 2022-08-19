import express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import { userRoute } from './src/route/user-route';
import userController from './src/controller/user.controller';
import { router } from './src/route/route';

dotenv.config();
const PORT = 3000;
const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use('',router)
// app.get('/login', userController.showForm)
// app.post('/login', userController.loginUser)
mongoose.connect('mongodb+srv://admin:admin123@cluster0.ndyjwui.mongodb.net/Book-Management').then(() => {
    console.log('Connect success!')
}).catch(e => {
    console.log(e);
})
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
