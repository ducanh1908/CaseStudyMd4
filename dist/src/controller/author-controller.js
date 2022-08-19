"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const author_1 = require("../model/author");
class AuthorController {
    constructor() {
        this.getAll = async (req, res) => {
            let authors = await author_1.Author.find();
            res.status(200).json(authors);
        };
        this.addAuthor = async (req, res) => {
            let author = req.body;
            author = await author_1.Author.create(author);
            res.status(200).json(author);
        };
        this.deleteAuthor = async (req, res) => {
            let id = req.params.id;
            let author = await author_1.Author.findById(id);
            if (!author) {
                res.status(404).json();
            }
            author === null || author === void 0 ? void 0 : author.delete();
            res.status(204).json();
        };
        this.getAuthor = async (req, res) => {
            let id = req.params.id;
            let author = await author_1.Author.findById(id);
            if (!author) {
                res.status(404).json();
            }
            res.status(200).json(author);
        };
        this.updateAuthor = async (req, res) => {
            console.log(req.body);
            let id = req.params.id;
            let author = await author_1.Author.findById(id);
            if (!author) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                let newAuthor = await author_1.Author.findByIdAndUpdate({ _id: id }, data);
                res.status(200).json(newAuthor);
            }
        };
    }
}
exports.default = new AuthorController();
//# sourceMappingURL=author-controller.js.map