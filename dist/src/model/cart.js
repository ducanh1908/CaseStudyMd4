"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
const mongoose_1 = require("mongoose");
const cartSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    order: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Order',
    },
    total: Number,
});
const Cart = (0, mongoose_1.model)('cart', cartSchema);
exports.Cart = Cart;
