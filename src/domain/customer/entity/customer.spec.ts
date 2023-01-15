import Customer from "./customer";
import Address from "./../value-object/address";

const emptyFieldMessage = (field: string) => `Customer ${field} must be provided and not empty`;
const tooSmallMessage = (field: string) => `Customer ${field} must be longer than 3 characters`;

const addressIsMandatoryMessage = "Customer address must be provided and not empty to activate customer";

describe("Customer", () => {
    describe("Empty Field", () => {
        it('When id is empty, throw an error', function () {
            expect(() => new Customer("", "Maralda"))
                .toThrowError(emptyFieldMessage("ID"));
        });

        it('When name is empty, throw an error', function () {
            expect(() => new Customer("123", ""))
                .toThrowError(tooSmallMessage("name"));
        });

    });

    describe("Name", () => {
        it('When name is less than 3 characters, throw an error', function () {
            expect(() => new Customer("123", "Ma"))
                .toThrowError("Customer name must be longer than 3 characters");
        });

        it('When name is more than 3 characters, do not throw an error', function () {
            expect(() => new Customer("123", "Maralda"))
                .not.toThrowError("Customer name must be longer than 3 characters");
        });

        it("When name is changed, validate the new name", function () {
            const customer = new Customer("123", "Maralda");
            expect(() => customer.changeName("Ma"))
                .toThrowError(tooSmallMessage("name"));
        });
    });

    describe("Activation", () => {
        it("When customer is activated, fail if customer hasn't address", function () {
            const customer = new Customer("123", "Maralda");
            expect(() => customer.activate())
                .toThrowError(addressIsMandatoryMessage);
        });

        it("When customer is activated, do not fail if customer has address", function () {
            const customer = new Customer("123", "Maralda");
            customer.changeAddress(new Address("Rua", 1, "Centro", "Cidade", "Estado", "País", "12345-678"));

            expect(() => customer.activate())
                .not.toThrowError(addressIsMandatoryMessage);
        });

    });
})