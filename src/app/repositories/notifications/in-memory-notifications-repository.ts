import { Notification } from "src/app/entities/notification/notification";
import { NotificationsRepository } from "./notifications-repository";


export class InMemoryNotificationsRepository implements NotificationsRepository  {

    public notifications: Notification[] = []

    async create(notification: Notification) {
        this.notifications.push(notification)
    }
}