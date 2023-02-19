import EventDispatcher from "./event-dispatcher";
import SendEmailWhenProductIsCreatedHandler from "../../product/event/handler/SendEmailWhenProductIsCreated.handler";
import ProductCreatedEvent from "../../product/event/ProductCreated.event";
import spyOn = jest.spyOn;

describe("Domain event dispatcher test", () => {
    it("should register an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();
        const event = "ProductCreatedEvent"

        eventDispatcher.register(event, eventHandler);

        expect(eventDispatcher.getHandlers(event)).toStrictEqual(new Set([eventHandler]));
        expect(eventDispatcher.getHandlers(event).size).toBe(1);
    });

    it("should unregister an event handler", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();
        const event = "ProductCreatedEvent"

        eventDispatcher.register(event, eventHandler);
        eventDispatcher.unregister(event, eventHandler);

        expect(eventDispatcher.getHandlers(event)).toStrictEqual(new Set());
        expect(eventDispatcher.getHandlers(event).size).toBe(0);
    })

    it("should unregister all event handlers", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();
        const event = "ProductCreatedEvent"

        eventDispatcher.register(event, eventHandler);
        eventDispatcher.unregisterAll(event);

        expect(eventDispatcher.getHandlers(event)).toStrictEqual(undefined);
    })

    it("should dispatch an event", () => {
        const eventDispatcher = new EventDispatcher();
        const eventHandler = new SendEmailWhenProductIsCreatedHandler();
        const handleSpy = jest.spyOn(SendEmailWhenProductIsCreatedHandler.prototype, "handle");

        const event = "ProductCreatedEvent"
        const eventData = new ProductCreatedEvent({userId: 1, productId: 1});

        eventDispatcher.register(event, eventHandler);
        eventDispatcher.dispatch(eventData);

        expect(eventDispatcher.getHandlers(event)).toStrictEqual(new Set([eventHandler]));
        expect(eventDispatcher.getHandlers(event).size).toBe(1);
        expect(handleSpy).toBeCalledWith(eventData);
    });
});