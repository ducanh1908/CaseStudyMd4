"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerneRoute = void 0;
const express_1 = require("express");
const gerne_controller_1 = __importDefault(require("../controller/gerne-controller"));
exports.gerneRoute = (0, express_1.Router)();
exports.gerneRoute.get('', gerne_controller_1.default.getAll);
exports.gerneRoute.post('', gerne_controller_1.default.updateGerne);
exports.gerneRoute.delete('/:id', gerne_controller_1.default.deleteGerne);
exports.gerneRoute.get('/:id', gerne_controller_1.default.getGerne);
exports.gerneRoute.put('/:id', gerne_controller_1.default.updateGerne);
