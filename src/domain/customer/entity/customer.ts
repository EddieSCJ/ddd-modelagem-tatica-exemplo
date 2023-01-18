import Address from './../value-object/address';

export default class Customer {
    _id: string;
    _name: string;
    _address!: Address;
    _active: boolean = false;
    _rewardPoints: number = 0;

    constructor(public id: string, public customerName: string) {
        this._id = id;
        this._name = customerName;
        this.validateBasicCustomer();
    }

    get name() : string {
        return this._name;
    }

    changeName(newName: string) {
        this._name = newName;
        this.validateBasicCustomer();
    }

    changeAddress(newAddress: Address) {
        this._address = newAddress;
        this.validateAddress();
    }

    get rewardPoints() {
        return this._rewardPoints;
    }

    increaseRewardPoints(points: number) {
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

    private validateAddress() {
        if (!this._address) {
            throw new Error('Customer address must be provided and not empty');
        }
    }
}