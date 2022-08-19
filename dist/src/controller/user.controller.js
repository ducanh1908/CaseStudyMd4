"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../model/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const path_1 = __importDefault(require("path"));
const role_1 = require("../model/role");
class UserController {
    async getAll(req, res) {
        let user = await user_1.User.find();
        res.status(200).json(user);
    }
    async Register(req, res) {
        let user = req.body;
        user.password = await bcrypt_1.default.hash(user.password, 10);
        user.role = '62ff4e565e0a6d6a9ace0ea8';
        let allUser = await user_1.User.findOne({
            username: user.username
        });
        if (!allUser) {
            user = await user_1.User.create(user);
            res.status(200).json(user);
        }
        else {
            res.status(401).json({ message: "Da ton tai" });
        }
    }
    async loginUser(req, res) {
        let login = req.body;
        let user = await user_1.User.findOne({
            username: login.username,
        });
        if (!user) {
            res.status(404).json({
                message: 'Username is not exist!!!'
            });
        }
        else {
            let comparePassword = await bcrypt_1.default.compare(login.password, user.password);
            if (!comparePassword) {
                res.status(401).json({
                    message: 'Password is wrong!!!'
                });
            }
            else {
                let role = await role_1.Role.findOne({ _id: user.role });
                console.log(user.role);
                if (role.name == "USER") {
                    let payload = {
                        username: user.username,
                        role: role.name
                    };
                    let secretKey = '230193';
                    let token = await jsonwebtoken_1.default.sign(payload, secretKey, {
                        expiresIn: 36000
                    });
                    res.status(200).json({
                        token: token,
                        role: role.name
                    });
                }
                else if (role.name == "ADMIN") {
                    let payload = {
                        username: user.username,
                        role: role.name
                    };
                    let secretKey = '230193';
                    let token = await jsonwebtoken_1.default.sign(payload, secretKey, {
                        expiresIn: 36000
                    });
                    res.status(200).json({
                        token: token,
                        role: role.name
                    });
                }
                else {
                    console.log(`Truy cap bat thuong`);
                }
            }
        }
    }
    async showFormHome(req, res, next) {
        try {
            let secretKey = '230193';
            let token = req.params.token;
            let result = jsonwebtoken_1.default.verify(token, secretKey);
            if (result) {
                next();
            }
        }
        catch (error) {
            return res.json('Phai login');
        }
    }
    showForm(req, res, next) {
        res.sendFile(path_1.default.join(__dirname, './login.html'));
    }
}
exports.default = new UserController;
//# sourceMappingURL=user.controller.js.map