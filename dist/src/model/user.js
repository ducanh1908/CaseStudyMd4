"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: String,
    password: String,
    name: String,
    email: String,
    address: String,
    phone: String,
    // role: String
    role: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'role'
        }]
});
const User = (0, mongoose_1.model)('user', userSchema);
exports.User = User;
