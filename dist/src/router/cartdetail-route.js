"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cartdetailRoute = void 0;
const express_1 = require("express");
const cart_detail_controller_1 = __importDefault(require("../controller/cart-detail-controller"));
exports.cartdetailRoute = (0, express_1.Router)();
exports.cartdetailRoute.post('', cart_detail_controller_1.default.addCart);
exports.cartdetailRoute.get('/:id', cart_detail_controller_1.default.getCartByUserID);
exports.cartdetailRoute.delete('/:id', cart_detail_controller_1.default.deleteCartId);
exports.cartdetailRoute.put('/:id', cart_detail_controller_1.default.UpdateCartId);
