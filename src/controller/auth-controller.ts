import bcrypt from 'bcrypt';
import {Request, Response} from 'express';
import { User } from '../model/user';
import jwt from 'jsonwebtoken'

class AuthController {

    register = async(req: Request, res: Response)=>{
        let user = req.body;
        user.password = await bcrypt.hash(user.password, 10);
        user = await User.create(user); 
        // let newUser = await User.findById(user._id).populate('role','name')
        res.status(201).json(user);  
    }

    login = async(req: Request, res: Response)=>{
        let loginForm = req.body;
        
        let user = await User.findOne({
            username: loginForm.username
            
        })
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
                        username: user.username
                    }
                    let secretKey = '190896'
                    let token = await jwt.sign(payload, secretKey,{
                        expiresIn : 36000
                    });
                    res.status(200).json({
                        token: token
                    })
                }
            }

        }
    }
}

export default new AuthController();