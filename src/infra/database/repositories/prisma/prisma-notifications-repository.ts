import { Injectable } from '@nestjs/common';
import { Notification } from "src/app/entities/notification/notification";
import { PrismaService } from "../../prisma.service";
import { NotificationsRepository } from "../../../../app/repositories/notifications/notifications-repository";

@Injectable()
export class PrismaNotificationsRepository implements NotificationsRepository  {

    constructor(private readonly prisma: PrismaService) {}

    async create(notification: Notification) {
        await this.prisma.notification.create({
            data : JSON.parse(JSON.stringify(notification))["props"]
        })
    }
}