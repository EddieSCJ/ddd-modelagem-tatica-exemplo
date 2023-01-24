"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = __importDefault(require("../entity/product"));
const product_service_1 = __importDefault(require("./product.service"));
describe("ProductService", () => {
    it("Should change the price of all products", () => {
        const product1 = new product_1.default("id1", "Product 1", 100);
        const product2 = new product_1.default("id2", "Product 2", 200);
        product_service_1.default.increasePriceInPercentage([product1, product2], 10);
        expect(product1.price).toBe(110);
        expect(product2.price).toBe(220);
    });
});
