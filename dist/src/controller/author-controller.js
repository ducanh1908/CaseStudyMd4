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
const author_1 = require("../model/author");
class AuthorController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let authors = yield author_1.Author.find();
            res.status(200).json(authors);
        });
        this.addAuthor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let author = req.body;
            author = yield author_1.Author.create(author);
            res.status(200).json(author);
        });
        this.deleteAuthor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let author = yield author_1.Author.findById(id);
            if (!author) {
                res.status(404).json();
            }
            author === null || author === void 0 ? void 0 : author.delete();
            res.status(204).json();
        });
        this.getAuthor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let author = yield author_1.Author.findById(id);
            if (!author) {
                res.status(404).json();
            }
            res.status(200).json(author);
        });
        this.updateAuthor = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            let id = req.params.id;
            let author = yield author_1.Author.findById(id);
            if (!author) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                let newAuthor = yield author_1.Author.findByIdAndUpdate({ _id: id }, data);
                res.status(200).json(newAuthor);
            }
        });
    }
}
exports.default = new AuthorController();
