import Order from "../entity/order";
import OrderItem from "../entity/order_item";
import OrderService from "./order.service";
import Customer from "../../customer/entity/customer";

describe("OrderService", () => {

    it("Should get the total price of an amount of orders", () => {
        const item1 = new OrderItem("id1", "Product 1", 100, "id1", 2, "orderid1");
        const item2 = new OrderItem("id2", "Product 2", 200, "id2", 1, "orderid1");

        const item3 = new OrderItem("id3", "Product 3", 300, "id3", 3, "orderid2");
        const item4 = new OrderItem("id4", "Product 4", 400, "id4", 1, "orderid2");

        const order1 = new Order("id1", "customerId1");
        order1.addItem(item1);
        order1.addItem(item2);

        const order2 = new Order("id2", "Product 2");
        order2.addItem(item3);
        order2.addItem(item4);

        const total = OrderService.getTotalPrice([order1, order2]);

        expect(total).toBe(1700);
    });

    it('should place order', function () {

        const customer = new Customer("id1", "Customer 1");
        const order = new Order('id1', 'customer1');
        order.addItem(new OrderItem('id1', 'Product 1', 100, 'id1', 2, 'id1'));
        order.addItem(new OrderItem('id2', 'Product 2', 200, 'id2', 1, 'id1'));

        OrderService.placeOrder(customer, order);

        expect(customer.rewardPoints).toBe(order.total() * .1);

    });

});