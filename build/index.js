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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const detail_1 = require("./detail");
const category_1 = require("./category");
const search_1 = require("./search");
const port = 3000;
const app = (0, express_1.default)();
app.get("/detail/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield (0, detail_1.detail)(req.params.id));
}));
app.get("/category/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield (0, category_1.category)(req.params.id));
}));
app.get("/search/:term", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield (0, search_1.search)(req.params.term));
}));
app.get("/categories", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send(yield (0, category_1.categories)());
}));
app.listen(port, () => {
    console.log(`Crawler listening on port ${port}`);
});
