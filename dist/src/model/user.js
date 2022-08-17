"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    username: String,
    password: String,
    // name: String,
    // email: String,
    // address: String,
    // phone: String,
    // role: {
    //   type: Schema.Types.ObjectId,
    //   ref: 'Role'
    // },
});
const User = (0, mongoose_1.model)("User", userSchema);
exports.User = User;
