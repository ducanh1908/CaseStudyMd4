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
class BookController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let books = yield book_1.Book.find().populate('gerne', 'name').populate('publisher', 'name');
            res.status(200).json(books);
        });
        this.addBook = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            try {
                let book = req.body;
                book = yield book_1.Book.create(book);
                let newBook = yield book_1.Book.findById(book._id).populate('gerne', 'name').populate('publisher', 'name');
                res.status(201).json(newBook);
            }
            catch (error) {
                next(error);
            }
        });
        this.deleteBook = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            try {
                let book = yield book_1.Book.findById(id);
                if (!book) {
                    res.status(404).json();
                }
                else {
                    book.delete();
                    res.status(204).json();
                }
            }
            catch (error) {
                next(error);
            }
        });
        this.getBook = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            try {
                let book = yield book_1.Book.findById(id).populate('gerne', 'name').populate('publisher', 'name');
                if (!book) {
                    res.status(404).json();
                }
                else {
                    res.status(200).json(book);
                }
            }
            catch (error) {
                next(error);
            }
        });
        this.updateBook = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let book = yield book_1.Book.findById(id);
            if (!book) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                yield book_1.Book.findOneAndUpdate({
                    _id: id
                }, data);
                data._id = id;
                book = yield book_1.Book.findById(id).populate('gerne', 'name').populate('publisher', 'name');
                res.status(200).json(book);
            }
        });
    }
}
exports.default = new BookController();
