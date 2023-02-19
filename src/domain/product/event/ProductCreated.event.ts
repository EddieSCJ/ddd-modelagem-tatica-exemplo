import EventInterface from "../../@shared/event/interfaces/event.interface";

export default class ProductCreatedEvent implements EventInterface {

    name: string = ProductCreatedEvent.name;
    dateTime: Date;
    eventData: any;

    constructor(eventData: any) {
        this.dateTime = new Date();
        this.eventData = eventData;
    }
}