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
const publisher_1 = require("../model/publisher");
class PublisherController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let publishers = yield publisher_1.Publisher.find();
            res.status(200).json(publishers);
        });
        this.addPublisher = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let publisher = req.body;
            publisher = yield publisher_1.Publisher.create(publisher_1.Publisher);
            res.status(200).json(publisher_1.Publisher);
        });
        this.deletePublisher = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let publisher = yield publisher_1.Publisher.findById(id);
            if (!publisher) {
                res.status(404).json();
            }
            publisher === null || publisher === void 0 ? void 0 : publisher.delete();
            res.status(204).json();
        });
        this.getPublisher = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let publisher = yield publisher_1.Publisher.findById(id);
            if (!publisher) {
                res.status(404).json();
            }
            res.status(200).json(publisher);
        });
        this.updatePublisher = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            let id = req.params.id;
            let publisher = yield publisher_1.Publisher.findById(id);
            if (!publisher) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                let newPublisher = yield publisher_1.Publisher.findByIdAndUpdate({ _id: id }, data);
                res.status(200).json(newPublisher);
            }
        });
    }
}
exports.default = new PublisherController();
