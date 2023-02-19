import EventInterface from "./event.interface";
import EventHandlerInterface from "./event-handler.interface";

export default interface EventDispatcherInterface {
    dispatch(event: EventInterface): void;
    register(event: string, handler: EventHandlerInterface): void;
    unregister(event: string, handler: EventHandlerInterface): void;
    unregisterAll(event: string): void;

    getHandlers(event: string): Set<EventHandlerInterface>;
}