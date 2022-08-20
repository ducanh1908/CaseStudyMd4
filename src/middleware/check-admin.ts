import jwt from 'jsonwebtoken';
import { SECRET_KEY } from './auth-middleware';
import { Response, Request, NextFunction } from 'express';

export const roleAdmin = async(req: Request, res: Response, next: NextFunction)=>{
    let authorization = req.headers.authorization;
    if(authorization) {
        let accessToken = authorization.split('')[1];
        if(!accessToken) {
            res.status(401).json({
                message : 'You are anonymous'
            })
        }
        else {
            jwt.verify(accessToken, SECRET_KEY,(err, data)=>{
                if(err) {
                    res.status(401).json({
                        error: err.message,
                        message: 'You are anonymous1'
                    })
                }
               console.log(data);

            })
        }
    }
}