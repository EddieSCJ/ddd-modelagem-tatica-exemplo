import EventHandlerInterface from "../../../@shared/event/interfaces/event-handler.interface";
import ProductCreatedEvent from "../ProductCreated.event";

export default class SendEmailWhenProductIsCreatedHandler implements EventHandlerInterface<ProductCreatedEvent> {
    handle(event: ProductCreatedEvent): void {
        console.log(`Send email to user ${event.eventData.userId} about product ${event.eventData.productId} created`);
    }
}