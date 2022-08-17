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
const gerne_1 = require("../model/gerne");
class GerneController {
    constructor() {
        this.getAll = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let gernes = yield gerne_1.Gerne.find();
            res.status(200).json(gernes);
        });
        this.addGerne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let gerne = req.body;
            gerne = yield gerne_1.Gerne.create(gerne);
            res.status(200).json(gerne);
        });
        this.deleteGerne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let gerne = yield gerne_1.Gerne.findById(id);
            if (!gerne) {
                res.status(404).json();
            }
            gerne === null || gerne === void 0 ? void 0 : gerne.delete();
            res.status(204).json();
        });
        this.getGerne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            let id = req.params.id;
            let gerne = yield gerne_1.Gerne.findById(id);
            if (!gerne) {
                res.status(404).json();
            }
            res.status(200).json(gerne);
        });
        this.updateGerne = (req, res) => __awaiter(this, void 0, void 0, function* () {
            console.log(req.body);
            let id = req.params.id;
            let gerne = yield gerne_1.Gerne.findById(id);
            if (!gerne) {
                res.status(404).json();
            }
            else {
                let data = req.body;
                let newGerne = yield gerne_1.Gerne.findByIdAndUpdate({ _id: id }, data);
                res.status(200).json(newGerne);
            }
        });
    }
}
exports.default = new GerneController();
