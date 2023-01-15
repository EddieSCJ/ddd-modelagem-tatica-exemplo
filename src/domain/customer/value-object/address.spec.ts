import Address from "./address";

let emptyFieldMessage = (field: String) => `${field} must be provided and not empty`;
let tooSmallNumberMessage = (field: String) => `${field} must be provided and greater than zero`;
describe("Address", () => {
    describe("Empty Field", () => {
        it('When street is empty, throw an error', function () {
            expect(() => new Address("", 1, "Centro", "Cidade", "Estado", "País", "12345-678"))
                .toThrowError(emptyFieldMessage("Street"));
        });

        it('When number is empty, throw an error', function () {
            expect(() => new Address("Rua", 0, "Centro", "Cidade", "Estado", "País", "12345-678"))
                .toThrowError(tooSmallNumberMessage("Number"));
        });

        it('When district is empty, throw an error', function () {
            expect(() => new Address("Rua", 1, "", "Cidade", "Estado", "País", "12345-678"))
                .toThrowError(emptyFieldMessage("District"));
        });

        it('When city is empty, throw an error', function () {
            expect(() => new Address("Rua", 1, "Centro", "", "Estado", "País", "12345-678"))
                .toThrowError(emptyFieldMessage("City"));
        });

        it('When state is empty, throw an error', function () {
            expect(() => new Address("Rua", 1, "Centro", "Cidade", "", "País", "12345-678"))
                .toThrowError(emptyFieldMessage("State"));
        });

        it('When country is empty, throw an error', function () {
            expect(() => new Address("Rua", 1, "Centro", "Cidade", "Estado", "", "12345-678"))
                .toThrowError(emptyFieldMessage("Country"));
        });

        it('When zipCode is empty, throw an error', function () {
            expect(() => new Address("Rua", 1, "Centro", "Cidade", "Estado", "País", ""))
                .toThrowError(emptyFieldMessage("Zip code"));
        });

    });

    describe("Formatted Date", () => {
        it('When all fields are valid, return a formatted address', function () {
            expect(new Address("Rua", 1, "Centro", "Cidade", "Estado", "País", "12345-678").toString())
                .toBe("Rua, 1 - Centro, Cidade - Estado, País - 12345-678");
        });
    });
});