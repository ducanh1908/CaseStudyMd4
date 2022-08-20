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
const user_1 = require("../model/user");
const cartDetail_1 = require("../model/cartDetail");
class CartDetailController {
    constructor() {
        this.getCartByUserID = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let user = yield user_1.User.findById(id);
            if (!user) {
                res.status(404).json;
            }
            else {
                let cartDetail = yield cartDetail_1.CartDetail.find({ "user": { "_id": user.id } });
                res.status(200).json(cartDetail);
            }
        });
        this.addCart = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let cart = req.body;
            let cartdetail = yield cartDetail_1.CartDetail.create(cart);
            res.status(200).json;
        });
        this.deleteCartId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let cart = yield cartDetail_1.CartDetail.findById(id);
            console.log(cart);
            if (!cart) {
                res.status(404).json;
            }
            else {
                let cartDetail = yield cartDetail_1.CartDetail.deleteOne({ id: id });
                res.status(200).json(cartDetail);
            }
        });
        this.UpdateCartId = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let cart = yield cartDetail_1.CartDetail.findById(id);
            if (!cart) {
                res.status(404).json;
            }
            else {
                let data = req.body;
                let cartDetail = yield cartDetail_1.CartDetail.findByIdAndUpdate({ id: id });
                console.log(cartDetail);
                res.status(200).json(cartDetail);
            }
        });
    }
}
exports.default = new CartDetailController();
