import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
    it("should throw error when id is empty", () => {
        expect(() => {
            let order = new Order("", "123");
        }).toThrowError("Order ID must be provided and not empty");
    });

    it("should throw error when customerId is empty", () => {
        expect(() => {
            let order = new Order("123", "");
        }).toThrowError("Order must have a customer");
    });

    it("should calculate total", () => {
        const item = new OrderItem("i1", "Item 1", 100, "p1", 2,"order1");
        const item2 = new OrderItem("i2", "Item 2", 200, "p2", 2,"order1");
        const order = new Order("o1", "c1")
        order.addItem(item);
        order.addItem(item2);

        expect(order.total()).toBe(600);

        const order2 = new Order("o1", "c1");
        order2.addItem(item);

        expect(order2.total()).toBe(200);
    });

    it("should throw error if the item qte is less or equal zero 0", () => {
        expect(() => {
            const item = new OrderItem("i1", "Item 1", 100, "p1", 0, "order1");
            const order = new Order("o1", "c1");
            order.addItem(item);
        }).toThrowError("Order Item quantity must be greater than zero");
    });
});