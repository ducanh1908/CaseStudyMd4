
import jwt from 'jsonwebtoken'
let secretKey = '230193'
export const auth = (req ,res,next) => {
    let authorization = req.headers.authorization;
    if (!authorization) {
        res.status(401).json({
            message : 'You are not USER!!!'
        })
    } else {
        let accessToken = authorization.split('')[1]
        jwt.verify(accessToken,secretKey,(err,data)=> {
            if (err) {
                res.status(404).json({
                    error : err.message,
                  message : "You are not USER!!!"  
                })
            } else {
                req.decoded = data
                next()
            }
        })
    }
}