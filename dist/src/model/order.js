"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Order = void 0;
const mongoose_1 = require("mongoose");
const orderSchema = new mongoose_1.Schema({
    books: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: 'Book'
        }],
    quantity: Number,
    price: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
});
const Order = (0, mongoose_1.model)('order', orderSchema);
exports.Order = Order;
