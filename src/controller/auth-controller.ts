import bcrypt from 'bcrypt';
import {Request, Response} from 'express';
import { User } from '../model/user';
import jwt from 'jsonwebtoken'
import { SECRET_KEY } from '../middleware/auth-middleware';

class AuthController {

    register = async(req: Request, res: Response)=>{
        let user = req.body;

        user.role=[];
        let role = '62ff4e565e0a6d6a9ace0ea8'
        user.role.push(role);
        let checkUser = await User.findOne({username: user.username})
        if(!checkUser) {
            user.password = await bcrypt.hash(user.password, 10);
            user = await User.create(user); 
            res.status(201).json(user);  
        }
        else {
            res.status(404).json({
                err: "User exited"
            });
        }
    }

    login = async(req: Request, res: Response)=>{
        let loginForm = req.body;  
        let user = await User.findOne({
            username: loginForm.username   
        });

        console.log(user);
        if(!user) {
            res.status(404).json({
                message: 'Username is not existed'
            });
        }
        else {  
            if(user.password) {
                let comparePassword = await bcrypt.compare(loginForm.password,user.password);
                if(!comparePassword){
                    res.status(401).json({
                        message: "Password is wrong"
                    })
                }
                else {
                    let payload = {
                        username: user.username,
                        role: user.role
                    }
                    
                    let token = await jwt.sign(payload, SECRET_KEY,{
                        expiresIn : 36000
                    });    
                    res.status(200).json({
                        token: token,
                        role: user.role
                    });
                }
            }

        }
    }
}

export default new AuthController();

