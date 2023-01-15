export default class Customer {
    _id: string;
    _name: string;
    _address: string;
    _active: boolean = false;

    constructor(public id: string, public name: string) {
        this._id = id;
        this._name = name;
        this.validateBasicCustomer();
    }

    changeName(newName: string) {
        this._name = newName;
        this.validateBasicCustomer();
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
        if (this._address == null || this._address == "") {
            throw new Error('Customer address must be provided and not empty to activate customer');
        }
    }
}