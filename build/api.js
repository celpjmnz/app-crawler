"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategories = exports.getCategoryProducts = exports.getSearchProducts = exports.getDetailProducts = void 0;
const axios_1 = __importDefault(require("axios"));
const headers = {
    "x-pandaclick-agent": "2",
    "x-panda-source": "PandaClick",
    "x-language": "en",
    "x-session-id": "a2e98f11-faa8-4864-b439-063bcfad4e4a",
    "user-agent": "okhttp/5.0.0-alpha.6",
};
const getDetailProducts = (pId) => {
    return axios_1.default.get(`https://api.panda-click.com/v3/products/${pId}`, {
        headers,
    });
};
exports.getDetailProducts = getDetailProducts;
const getSearchProducts = (searchTerm) => {
    return axios_1.default.get(`https://api.panda-click.com/v3/products?search_key=${searchTerm}&sort=relevance&page=1`, {
        headers,
    });
};
exports.getSearchProducts = getSearchProducts;
const getCategoryProducts = (categoryId) => {
    return axios_1.default.get(`https://api.panda-click.com/v3/products?category_id=${categoryId}&sort=relevance&page=1`, {
        headers,
    });
};
exports.getCategoryProducts = getCategoryProducts;
const getAllCategories = () => {
    return axios_1.default.get("https://api.panda-click.com/v3/categories", {
        headers,
    });
};
exports.getAllCategories = getAllCategories;
