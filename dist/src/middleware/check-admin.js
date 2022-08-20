"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roleAdmin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_middleware_1 = require("./auth-middleware");
const roleAdmin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = authorization.split('')[1];
        if (!accessToken) {
            res.status(401).json({
                message: 'You are anonymous'
            });
        }
        else {
            jsonwebtoken_1.default.verify(accessToken, auth_middleware_1.SECRET_KEY, (err, data) => {
                if (err) {
                    res.status(401).json({
                        error: err.message,
                        message: 'You are anonymous1'
                    });
                }
                console.log(data);
            });
        }
    }
});
exports.roleAdmin = roleAdmin;
