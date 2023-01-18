import Product from "../entity/product";
import ProductService from "./product.service";

describe("ProductService", () => {
    it("Should change the price of all products", () => {
       const product1 = new Product("id1", "Product 1", 100);
       const product2 = new Product("id2", "Product 2", 200);

       ProductService.increasePriceInPercentage([product1, product2], 10);

       expect(product1.price).toBe(110);
       expect(product2.price).toBe(220);
    });
});