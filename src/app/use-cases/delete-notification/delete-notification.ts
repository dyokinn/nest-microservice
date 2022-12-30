import { Injectable } from '@nestjs/common';
import { Notification } from '../../entities/notification/notification'
import { NotificationsRepository } from '../../repositories/notifications/notifications-repository'

@Injectable()
export class DeleteNotification {
    
    constructor(private notificationsRepository: NotificationsRepository) {}


    async execute(notificationId: string): Promise<boolean> {
        
        // chama o repositorio
        const result = await this.notificationsRepository.delete(notificationId)

        return result
    }
}
