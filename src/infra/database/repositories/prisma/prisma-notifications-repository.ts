import { NotificationProps } from './../../../../app/entities/notification/notification';
import { Injectable } from '@nestjs/common';
import { Notification } from "src/app/entities/notification/notification";
import { PrismaService } from "../../prisma.service";
import { NotificationsRepository } from "../../../../app/repositories/notifications/notifications-repository";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository  {

    constructor(private readonly prisma: PrismaService) {}

    async create(notification: Notification) {
        await this.prisma.notification.create({
            data : JSON.parse(JSON.stringify(notification))
        })
    }

    async delete(notificationId: string) {
        try {
            const notification = await this.prisma.notification.delete({
                where: {
                    id: notificationId
                }
            })
            return true
        }
        catch(e){
            console.log('====================================');
            console.log(e);
            console.log('====================================');
            return false
        }
    }

    async findById(notificationId: string) {
        try {
            const notificationProps: NotificationProps = await this.prisma.notification.findFirstOrThrow({
                where: {
                    id: notificationId
                }
            })
            return new Notification(notificationProps)
        }
        catch(e){
            console.log('====================================');
            console.log(e);
            console.log('====================================');
            return undefined
        }
    }

    async countUserNotifications(authUserId: string) {
        const count: number = await this.prisma.notification.count({
            where: {
                authUserId: authUserId
            },
        })
        
        return count
    }

}