import { Request, Response, Router } from "express";
import { auth } from "../middleware/auth";
import UserController from "../controller/user.controller";

export const userRoute = Router();
var cors = require('cors')

// userRoute.use(auth)
userRoute.post('/register', UserController.Register);
userRoute.post('/login',UserController.loginUser);

// userRoute.post('/login', UserController.loginUser);
userRoute.get('/register',UserController.getAll);
userRoute.get('/login',UserController.showForm);

userRoute.get('admin',auth)