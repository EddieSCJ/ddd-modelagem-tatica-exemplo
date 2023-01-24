"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ProductService {
    // Isso não parece fazer sentido quando você usa um banco de dados ou precisa fazer uma alteração em lote
    // por questoões de performance. Mas é um exemplo de como usar o conceito de serviço.
    static increasePriceInPercentage(products, percentage) {
        products.forEach(product => {
            product.changePrice(Number.parseFloat((product.price * (1 + (percentage / 100))).toFixed(0)));
        });
    }
}
exports.default = ProductService;
