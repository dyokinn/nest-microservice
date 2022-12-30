import { Injectable } from '@nestjs/common';
import { Notification } from '../../entities/notification/notification'
import { NotificationsRepository } from '../../repositories/notifications/notifications-repository'

@Injectable()
export class CountUserNotifications {
    
    constructor(private notificationsRepository: NotificationsRepository) {}

    async execute(authUserId: string): Promise<number> {
        
        // chama o repositorio
        const count = await this.notificationsRepository.countUserNotifications(authUserId)

        return count
    }
}
