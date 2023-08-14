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
exports.detail = void 0;
const api_1 = require("./api");
const detail = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, api_1.getDetailProducts)(id);
    if (res.status !== 200)
        throw new Error("Product has not been found");
    const data = res.data.data.product;
    const varieties = data.varieties.find((i) => i.id === Number(id));
    console.log(id);
    const nQ = varieties ? `${varieties.size} ${varieties.unit}` : undefined;
    const product = {
        id: data.id,
        name: data.name,
        brand: data.brand.name,
        category: data.category.name,
        description: varieties.description,
        price: varieties.price,
        netQuantity: nQ,
        available: varieties.availability > 0 ? "yes" : "no",
    };
    return product;
});
exports.detail = detail;
