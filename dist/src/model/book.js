"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    name: String,
    author: String,
    yearOfPublish: Number,
    reprint: Number,
    ISBN: Number,
    description: String,
    image: String,
    gerne: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Gerne'
    },
    publisher: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Publisher'
    },
    price: String
});
const Book = (0, mongoose_1.model)('Book', bookSchema);
exports.Book = Book;
