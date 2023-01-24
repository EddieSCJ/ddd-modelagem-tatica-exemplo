"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Order {
    constructor(id, customerId) {
        this.id = id;
        this.customerId = customerId;
        this._items = [];
        this._total = 0;
        this._id = id;
        this._customerId = customerId;
        this.validateBasicOrder();
    }
    addItem(item) {
        this._items.push(item);
        this._total += item.price;
    }
    total() {
        this._total = this._items.reduce((total, item) => total + item.total(), 0);
        return this._total;
    }
    removeItem(item) {
        var index = this._items.indexOf(item);
        if (index > -1) {
            this._items.splice(index, 1);
            this._total -= item.price;
        }
    }
    calculateRewardPoints() {
        return this.total() * 0.1;
    }
    // Princípio da autovalidação
    validateBasicOrder() {
        if (this._id == null || this._id == "") {
            throw new Error('Order ID must be provided and not empty');
        }
        if (this._customerId == null || this._customerId == "") {
            throw new Error('Order must have a customer');
        }
    }
}
exports.default = Order;
