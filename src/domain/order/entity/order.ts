import OrderItem from "./order_item";

export default class Order {
    _id: string;
    _customerId: string;
    _items: OrderItem[] = [];
    _total: number = 0;

    constructor(public id: string, public customerId: string) {
        this._id = id;
        this._customerId = customerId;
        this.validateBasicOrder();
    }

    addItem(item: OrderItem) {
        this._items.push(item);
        this._total += item.price;
    }

    total() {
        this._total = this._items.reduce((total, item) => total + item.total(), 0);
        return this._total;
    }

    removeItem(item: OrderItem) {
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