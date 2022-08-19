"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: String,
    username: String,
    password: String,
    address: String,
    phone: String,
    role: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Role'
    }
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.User = User;
//# sourceMappingURL=user.js.map