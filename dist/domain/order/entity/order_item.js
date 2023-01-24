"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OrderItem {
    constructor(id, name, price, productId, quantity, orderId) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.productId = productId;
        this.quantity = quantity;
        this.orderId = orderId;
        this._id = id;
        this._orderId = orderId;
        this._productId = productId;
        this._name = name;
        this._quantity = quantity;
        this._price = price;
        this.validateBasicOrderItem();
    }
    total() {
        return this._quantity * this._price;
    }
    // Princípio da autovalidação
    validateBasicOrderItem() {
        if (this._id == null || this._id == "") {
            throw new Error('Order Item ID must be provided and not empty');
        }
        if (this._orderId == null || this._orderId == "") {
            throw new Error('Order Item must have an order');
        }
        if (this._name == null) {
            throw new Error('Order Item must have a product name');
        }
        if (this._quantity <= 0) {
            throw new Error('Order Item quantity must be greater than zero');
        }
        if (this._price <= 0) {
            throw new Error('Order Item price must be greater than zero');
        }
        if (this._productId == null || this._productId == "") {
            throw new Error('Order Item must have a product');
        }
    }
}
exports.default = OrderItem;
