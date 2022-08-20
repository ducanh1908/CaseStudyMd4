"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartDetail = void 0;
const mongoose_1 = require("mongoose");
const cartDetailSchema = new mongoose_1.Schema({
    user: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'user'
    },
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'book'
    },
    quantity: Number
});
const CartDetail = (0, mongoose_1.model)('cartDetail', cartDetailSchema);
exports.CartDetail = CartDetail;
