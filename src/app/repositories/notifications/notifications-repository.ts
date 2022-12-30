import { Notification } from '../../entities/notification/notification';

export abstract class NotificationsRepository {
    abstract create (notification:Notification) : Promise<void>
    abstract findById (notificationId:string) : Promise<Notification | undefined>
    abstract countUserNotifications (authUserId:string) : Promise<number>
    abstract delete (notificationId:string) : Promise<boolean>
}