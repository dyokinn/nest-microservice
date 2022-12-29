import { Injectable } from '@nestjs/common';
import { Notification } from '../../entities/notification/notification'
import { NotificationsRepository } from '../../repositories/notifications/notifications-repository'

@Injectable()
export class SendNotification {
    
    constructor(private notificationsRepository: NotificationsRepository) {}


    async execute(notification: Notification): Promise<Notification> {
        
        // chama o repositorio
        await this.notificationsRepository.create(notification)

        return notification
    }
}
