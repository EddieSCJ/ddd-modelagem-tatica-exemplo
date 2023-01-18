import Order from "../entity/order";
import Customer from "../../customer/entity/customer";

export default class OrderService {
    static getTotalPrice(orders: Order[]): number {
        return orders.reduce((total, order) => total + order.total(), 0);
    }

    static placeOrder(customer: Customer, order: Order) {
        customer.increaseRewardPoints(order.calculateRewardPoints());
    }
}