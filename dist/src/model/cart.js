"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User'
    },
    orders: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Order'
        }],
    subtotal: {
        type: Number,
        default: 0,
        required: true,
    },
    status: String
}, { timestamps: true });
const Cart = (0, mongoose_1.model)('cart', cartSchema);
exports.Cart = Cart;
