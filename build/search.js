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
exports.search = void 0;
const api_1 = require("./api");
const search = (term) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, api_1.getSearchProducts)(term);
    if (res.status !== 200)
        throw new Error("Unable to fetch");
    const data = res.data.data.products;
    let products = [];
    data.map((p) => {
        const varieties = p.varieties.length > 1
            ? p.varieties.find((i) => i.id.toString() === p.id)
            : p.varieties[0];
        const nQ = varieties ? `${varieties.size} ${varieties.unit}` : undefined;
        const product = {
            id: p.id,
            name: p.name,
            brand: p.brand.name,
            category: p.category.name,
            description: varieties ? varieties === null || varieties === void 0 ? void 0 : varieties.description : p.name,
            price: varieties ? varieties === null || varieties === void 0 ? void 0 : varieties.price : "1",
            netQuantity: nQ,
            available: varieties
                ? (varieties === null || varieties === void 0 ? void 0 : varieties.availability) > 0
                    ? "yes"
                    : "no"
                : "no",
        };
        products.push(product);
    });
    return {
        total_number_products: products.length,
        products: products,
    };
});
exports.search = search;
