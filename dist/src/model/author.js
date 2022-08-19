"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Author = void 0;
const mongoose_1 = require("mongoose");
const authorSchema = new mongoose_1.Schema({
    name: String,
    yearOfBirth: String,
    worksAmount: {
        type: Number,
        default: 0
    },
    nationality: String,
    linkWiki: String,
    image: String,
});
const Author = (0, mongoose_1.model)('author', authorSchema);
exports.Author = Author;
//# sourceMappingURL=author.js.map