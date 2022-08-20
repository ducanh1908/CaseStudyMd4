"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'User',
    },
    order: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Order',
        }],
    subtotal: {
        default: 0,
        type: Number
    }
});
const Order = (0, mongoose_1.model)('cart', orderSchema);
exports.Order = Order;
