"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderService {
    static getTotalPrice(orders) {
        return orders.reduce((total, order) => total + order.total(), 0);
    }
    static placeOrder(customer, order) {
        customer.increaseRewardPoints(order.calculateRewardPoints());
    }
}
exports.default = OrderService;
