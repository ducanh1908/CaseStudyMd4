"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Publisher = void 0;
const mongoose_1 = require("mongoose");
const publisherSchema = new mongoose_1.Schema({
    name: String
});
const Publisher = (0, mongoose_1.model)('publisher', publisherSchema);
exports.Publisher = Publisher;
