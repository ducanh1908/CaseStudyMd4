"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
let secretKey = '230193';
const auth = (req, res, next) => {
    let authorization = req.headers.authorization;
    if (!authorization) {
        res.status(401).json({
            message: 'You are not USER!!!'
        });
    }
    else {
        let accessToken = authorization.split('')[1];
        jsonwebtoken_1.default.verify(accessToken, secretKey, (err, data) => {
            if (err) {
                res.status(404).json({
                    error: err.message,
                    message: "You are not USER!!!"
                });
            }
            else {
                req.decoded = data;
                next();
            }
        });
    }
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map