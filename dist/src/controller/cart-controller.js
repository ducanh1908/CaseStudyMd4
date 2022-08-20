"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cart_1 = require("../model/cart");
class CartController {
    constructor() {
        this.getCart = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let carts = yield cart_1.Cart.find().populate({
                path: "orders.book", select: "name price total"
            });
            res.status(200).json(carts);
        });
        this.addCart = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let users = '62fee7c81e6b1da9fea2ce3a';
            const { books, subtotal, user } = req.body;
            const quantity = Number.parseInt(req.body.quantity);
            // -------Get users Cart ------
            let cart = yield cart_1.Cart.findOne({ users });
        });
    }
}
exports.default = new CartController();
