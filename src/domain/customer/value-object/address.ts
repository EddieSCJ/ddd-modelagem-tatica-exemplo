class Address {
    _street: string;
    _number: number;
    _district: string;
    _city: string;
    _state: string;
    _country: string;
    _zipCode: string;

    constructor(public street: string, public number: number, public district: string, public city: string, public state: string, public country: string, public zipCode: string) {
        this._street = street;
        this._number = number;
        this._district = district;
        this._city = city;
        this._state = state;
        this._country = country;
        this._zipCode = zipCode;
        this.validateAddress();
    }

    validateAddress() {
        if (this._street == null || this._street == "") {
            throw new Error('Street must be provided and not empty');
        }

        if (this._number == null || this._number <= 0) {
            throw new Error('Number must be provided and greater than zero');
        }

        if (this._district == null || this._district == "") {
            throw new Error('District must be provided and not empty');
        }

        if (this._city == null || this._city == "") {
            throw new Error('City must be provided and not empty');
        }

        if (this._state == null || this._state == "") {
            throw new Error('State must be provided and not empty');
        }

        if (this._country == null || this._country == "") {
            throw new Error('Country must be provided and not empty');
        }

        if (this._zipCode == null || this._zipCode == "") {
            throw new Error('Zip code must be provided and not empty');
        }
    }

    toString() {
        return `${this._street}, ${this._number} - ${this._district}, ${this._city} - ${this._state}, ${this._country} - ${this._zipCode}`;
    }
}