import { Notification } from '../../entities/notification/notification'
import { NotificationsRepository } from '../../repositories/notifications-repository';

export class SendNotification {
    
    constructor(private notificationsRepository: NotificationsRepository){}

    async execute(authUserId: string, notification: Notification, repository: NotificationsRepository): Promise<Boolean> {
        const sendNotification = new SendNotification(repository)
        
        // persistencia no banco
        await this.notificationsRepository.create(notification)

        return true
    }
}
