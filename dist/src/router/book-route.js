"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRoute = void 0;
const express_1 = require("express");
const book_controller_1 = __importDefault(require("../controller/book-controller"));
exports.bookRoute = (0, express_1.Router)();
exports.bookRoute.get('', book_controller_1.default.getAll);
exports.bookRoute.post('', book_controller_1.default.addBook);
exports.bookRoute.delete('/:id', book_controller_1.default.deleteBook);
exports.bookRoute.get('/:id', book_controller_1.default.getBook);
exports.bookRoute.put('/:id', book_controller_1.default.updateBook);
