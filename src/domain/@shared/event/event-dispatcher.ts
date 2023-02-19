import EventDispatcherInterface from "./interfaces/event-dispatcher.interface";
import EventHandlerInterface from "./interfaces/event-handler.interface";
import EventInterface from "./interfaces/event.interface";

export default class EventDispatcher implements EventDispatcherInterface {
    private handlers: Map<string, Set<EventHandlerInterface>> = new Map();

    public dispatch(event: EventInterface): void {
        const eventHandlers = this.handlers.get(event.name);

        if (eventHandlers) {
            eventHandlers.forEach(handler => handler.handle(event));
        }
    }

    public register(event: string, handler: EventHandlerInterface): void {
        const eventHandlers = this.handlers.get(event);

        if (eventHandlers) {
            eventHandlers.add(handler);
        } else {
            this.handlers.set(event, new Set([handler]));
        }
    }

    public unregister(event: string, handler: EventHandlerInterface): void {
        const eventHandlers = this.handlers.get(event);

        if (eventHandlers) {
            eventHandlers.delete(handler);
        }
    }

    public unregisterAll(event: string): void {
        this.handlers.delete(event);
    }

    public getHandlers(event: string) : Set<EventHandlerInterface> {
        return this.handlers.get(event);
    }
}