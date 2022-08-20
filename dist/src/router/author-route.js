"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorRouter = void 0;
const author_controller_1 = __importDefault(require("../controller/author-controller"));
const express_1 = require("express");
exports.authorRouter = (0, express_1.Router)();
// authorRouter.use(auth)
exports.authorRouter.get('', author_controller_1.default.getAll);
exports.authorRouter.post('', author_controller_1.default.addAuthor);
exports.authorRouter.delete('/:id', author_controller_1.default.deleteAuthor);
exports.authorRouter.get('/detail/:id', author_controller_1.default.getAuthor);
exports.authorRouter.put('/:id', author_controller_1.default.updateAuthor);
exports.authorRouter.get('/search', author_controller_1.default.searchAuthor);
