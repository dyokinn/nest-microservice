import { PrismaService } from './../database/prisma.service';
import { PrismaNotificationsRepository } from './../database/repositories/prisma/prisma-notifications-repository';
import { SendNotification } from './../../app/use-cases/send-notification/send-notification';
import { NotificationsController } from './controllers/notifications.controller';
import { Module } from "@nestjs/common";
import { NotificationsRepository } from 'src/app/repositories/notifications/notifications-repository';

@Module({
    controllers: [NotificationsController],
    providers: [
        PrismaService,
        SendNotification,
        {
            provide: NotificationsRepository,
            useClass: PrismaNotificationsRepository 
        }
    ]
})

export class HttpModule{}