"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const order_1 = __importDefault(require("../entity/order"));
const order_item_1 = __importDefault(require("../entity/order_item"));
const order_service_1 = __importDefault(require("./order.service"));
const customer_1 = __importDefault(require("../../customer/entity/customer"));
describe("OrderService", () => {
    it("Should get the total price of an amount of orders", () => {
        const item1 = new order_item_1.default("id1", "Product 1", 100, "id1", 2, "orderid1");
        const item2 = new order_item_1.default("id2", "Product 2", 200, "id2", 1, "orderid1");
        const item3 = new order_item_1.default("id3", "Product 3", 300, "id3", 3, "orderid2");
        const item4 = new order_item_1.default("id4", "Product 4", 400, "id4", 1, "orderid2");
        const order1 = new order_1.default("id1", "customerId1");
        order1.addItem(item1);
        order1.addItem(item2);
        const order2 = new order_1.default("id2", "Product 2");
        order2.addItem(item3);
        order2.addItem(item4);
        const total = order_service_1.default.getTotalPrice([order1, order2]);
        expect(total).toBe(1700);
    });
    it('should place order', function () {
        const customer = new customer_1.default("id1", "Customer 1");
        const order = new order_1.default('id1', 'customer1');
        order.addItem(new order_item_1.default('id1', 'Product 1', 100, 'id1', 2, 'id1'));
        order.addItem(new order_item_1.default('id2', 'Product 2', 200, 'id2', 1, 'id1'));
        order_service_1.default.placeOrder(customer, order);
        expect(customer.rewardPoints).toBe(order.total() * .1);
    });
});
