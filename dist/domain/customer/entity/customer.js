"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(id, customerName) {
        this.id = id;
        this.customerName = customerName;
        this._active = false;
        this._rewardPoints = 0;
        this._id = id;
        this._name = customerName;
        this.validateBasicCustomer();
    }
    get name() {
        return this._name;
    }
    changeName(newName) {
        this._name = newName;
        this.validateBasicCustomer();
    }
    changeAddress(newAddress) {
        this._address = newAddress;
        this.validateAddress();
    }
    get rewardPoints() {
        return this._rewardPoints;
    }
    increaseRewardPoints(points) {
        this._rewardPoints += points;
    }
    activate() {
        this.validateActivation();
        this._active = true;
    }
    deactivate() {
        this._active = false;
    }
    // Princípio da autovalidação
    validateBasicCustomer() {
        if (this._id == null || this._id == "") {
            throw new Error('Customer ID must be provided and not empty');
        }
        if (this._name != null && this._name.length <= 3) {
            throw new Error('Customer name must be longer than 3 characters');
        }
    }
    validateActivation() {
        if (!this._address) {
            throw new Error('Customer address must be provided and not empty to activate customer');
        }
    }
    validateAddress() {
        if (!this._address) {
            throw new Error('Customer address must be provided and not empty');
        }
    }
}
exports.default = Customer;
