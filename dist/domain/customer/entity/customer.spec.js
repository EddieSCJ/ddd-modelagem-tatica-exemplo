"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const customer_1 = __importDefault(require("./customer"));
const address_1 = __importDefault(require("./../value-object/address"));
const emptyFieldMessage = (field) => `Customer ${field} must be provided and not empty`;
const tooSmallMessage = (field) => `Customer ${field} must be longer than 3 characters`;
const addressIsMandatoryMessage = "Customer address must be provided and not empty to activate customer";
describe("Customer", () => {
    describe("Empty Field", () => {
        it('When id is empty, throw an error', function () {
            expect(() => new customer_1.default("", "Maralda"))
                .toThrowError(emptyFieldMessage("ID"));
        });
        it('When name is empty, throw an error', function () {
            expect(() => new customer_1.default("123", ""))
                .toThrowError(tooSmallMessage("name"));
        });
    });
    describe("Name", () => {
        it('When name is less than 3 characters, throw an error', function () {
            expect(() => new customer_1.default("123", "Ma"))
                .toThrowError("Customer name must be longer than 3 characters");
        });
        it('When name is more than 3 characters, do not throw an error', function () {
            expect(() => new customer_1.default("123", "Maralda"))
                .not.toThrowError("Customer name must be longer than 3 characters");
        });
        it("When name is changed, validate the new name", function () {
            const customer = new customer_1.default("123", "Maralda");
            expect(() => customer.changeName("Ma"))
                .toThrowError(tooSmallMessage("name"));
        });
        it("Change Name", function () {
            const customer = new customer_1.default("123", "Maralda");
            customer.changeName("Maralda");
            expect(customer.name).toBe("Maralda");
        });
    });
    describe("Activation", () => {
        it("When customer is activated, fail if customer hasn't address", function () {
            const customer = new customer_1.default("123", "Maralda");
            expect(() => customer.activate())
                .toThrowError(addressIsMandatoryMessage);
        });
        it("When customer is activated, do not fail if customer has address", function () {
            const customer = new customer_1.default("123", "Maralda");
            customer.changeAddress(new address_1.default("Rua", 1, "Centro", "Cidade", "Estado", "País", "12345-678"));
            expect(() => customer.activate())
                .not.toThrowError(addressIsMandatoryMessage);
        });
    });
});
