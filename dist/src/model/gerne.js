"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gerne = void 0;
const mongoose_1 = require("mongoose");
const gerneSchema = new mongoose_1.Schema({
    name: String
});
const Gerne = (0, mongoose_1.model)('gerne', gerneSchema);
exports.Gerne = Gerne;
