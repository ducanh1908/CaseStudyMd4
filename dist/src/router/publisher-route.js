"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.publisherRoute = void 0;
const express_1 = require("express");
const publisher_controller_1 = __importDefault(require("../controller/publisher-controller"));
exports.publisherRoute = (0, express_1.Router)();
exports.publisherRoute.get('', publisher_controller_1.default.getAll);
exports.publisherRoute.post('', publisher_controller_1.default.updatePublisher);
exports.publisherRoute.delete('/:id', publisher_controller_1.default.deletePublisher);
exports.publisherRoute.get('/:id', publisher_controller_1.default.getPublisher);
exports.publisherRoute.put('/:id', publisher_controller_1.default.updatePublisher);
