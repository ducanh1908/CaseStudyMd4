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
const book_1 = require("../model/book");
const order_1 = require("../model/order");
class Ordercontroler {
    constructor() {
        this.createOrder = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            yield book_1.Book.findOne({ _id: id })
                .then(book => {
                new order_1.Order({ book: [book] }).save();
            });
        });
    }
}
exports.default = new Ordercontroler();
