
import bcrypt from "bcrypt"
import { Request, Response } from "express";
import { User } from "../model/user";
import jwt from "jsonwebtoken"
import path from 'path'
import { Role } from "../model/role";
class UserController{
    async  getAll(req: Request, res : Response) {
        let user = await User.find();
        res.status(200).json(user)
    }


    async Register(req: Request, res : Response)  {
        let user = req.body
        user.password = await bcrypt.hash(user.password,10);
        user.role = '62feebc1d84698b97faab0d6';
        let allUser = await User.findOne({
            username : user.username
        })
        
        if(!allUser) {
            user = await User.create(user);  
            res.status(200).json(user)
        }   else {
            res.status(401).json({message: "Da ton tai"})
        }

    }


    async loginUser(req: Request, res : Response) {
        let login = req.body;
        let user  = await User.findOne({
            username : login.username,
        })
        // console.log(user);
        if(!user) {
            res.status(404).json({
                message : 'Username is not exist!!!'
            })
        } else {
            let comparePassword = await bcrypt.compare(login.password, user.password)
            if(! comparePassword) {
                res.status(401).json({
                    message : 'Password is wrong!!!'
                })
            } else {
                let role = await Role.findOne({_id: user.role});
                console.log(user.role);
                if (role.name == "USER") {
                    let payload = {
                        username : user.username,
                        role : role.name
                    }
                    // console.log(payload);
                    let secretKey = '230193'
                    let token = await jwt.sign(payload,secretKey,{
                        expiresIn : 36000
                    });
                    res.status(200).json({
                        token  : token,
                        role : role.name
                    })
                } else 
                if (role.name == "ADMIN") {
                    let payload = {
                        username : user.username,
                        role : role.name
                    }
                    let secretKey = '230193'
                    let token = await jwt.sign(payload,secretKey,{
                        expiresIn : 36000
                    });
                    res.status(200).json({
                        token  : token,
                        role : role.name
                    })
                } else {
                    console.log(`Truy cap bat thuong`);
                    
                }
            }
        }
    }

    async showFormHome(req: Request, res : Response, next)  {
        try {
            let secretKey = '230193'
            let token = req.params.token
           let result = jwt.verify(token,secretKey)
           if(result) {
            next()
           }
        } catch (error) {
            return res.json('Phai login')
            
        }
    }

    showForm(req: Request, res : Response, next) {
        res.sendFile(path.join(__dirname,'./login.html'))
    }
}

export default new UserController