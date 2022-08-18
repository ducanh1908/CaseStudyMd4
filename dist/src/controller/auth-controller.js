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
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../model/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_middleware_1 = require("../middleware/auth-middleware");
class AuthController {
    constructor() {
        this.register = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let user = req.body;
            user.password = yield bcrypt_1.default.hash(user.password, 10);
            user = yield user_1.User.create(user);
            // let newUser = await User.findById(user._id).populate('role','name')
            res.status(201).json(user);
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let loginForm = req.body;
            let user = yield user_1.User.findOne({
                username: loginForm.username
            });
            if (!user) {
                res.status(404).json({
                    message: 'Username is not existed'
                });
            }
            else {
                if (user.password) {
                    let comparePassword = yield bcrypt_1.default.compare(loginForm.password, user.password);
                    if (!comparePassword) {
                        res.status(401).json({
                            message: "Password is wrong"
                        });
                    }
                    else {
                        let payload = {
                            username: user.username
                        };
                        let token = yield jsonwebtoken_1.default.sign(payload, auth_middleware_1.SECRET_KEY, {
                            expiresIn: 36000
                        });
                        res.status(200).json({
                            token: token,
                            user: user.username
                        });
                    }
                }
            }
        });
    }
}
exports.default = new AuthController();
