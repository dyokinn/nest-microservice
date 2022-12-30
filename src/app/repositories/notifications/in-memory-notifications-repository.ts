import { Notification } from "src/app/entities/notification/notification";
import { NotificationsRepository } from "./notifications-repository";


export class InMemoryNotificationsRepository implements NotificationsRepository  {

    public notifications: Notification[] = []

    async create(notification: Notification) {
        this.notifications.push(notification)
    }

    async delete(notificationId: string) {
        try {
            const newNotifications = this.notifications.filter(notification => notification.id !== notificationId)
            this.notifications = newNotifications
            return true
        } catch (error) {
            return false
        }
    }

    async findById(notificationId: string) {
        const notification = this.notifications.find(notification => notification.id == notificationId)
        return notification
    }

    async countUserNotifications(authUserId: string) {
        const count = this.notifications.filter(notification => notification.authUserId !== authUserId).length
        return count
    }
}