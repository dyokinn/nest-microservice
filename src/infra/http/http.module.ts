import { DeleteNotification } from './../../app/use-cases/delete-notification/delete-notification';
import { PrismaService } from './../database/prisma.service';
import { PrismaNotificationsRepository } from './../database/repositories/prisma/prisma-notifications-repository';
import { SendNotification } from './../../app/use-cases/send-notification/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { Module } from "@nestjs/common";
import { NotificationsRepository } from 'src/app/repositories/notifications/notifications-repository';
import { CountUserNotifications } from 'src/app/use-cases/count-user-notifications/count-user-notifications';

@Module({
    controllers: [NotificationsController],
    providers: [
        PrismaService,
        SendNotification,
        DeleteNotification,
        CountUserNotifications,
        {
            provide: NotificationsRepository,
            useClass: PrismaNotificationsRepository 
        }
    ]
})

export class HttpModule{}