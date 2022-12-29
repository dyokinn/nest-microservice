import { randomUUID } from 'crypto';
import { PrismaNotificationsRepository } from './../../database/repositories/prisma/prisma-notifications-repository';
import { SendNotification } from './../../../app/use-cases/send-notification/send-notification';
/* eslint-disable prettier/prettier */
import { PrismaService } from '../../database/prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import CreateNotificationBody from '../DTOs/create-notification-body';
import { Notification, NotificationProps } from '../../../app/entities/notification/notification'


@Controller('notifications')
export class NotificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post('create')
  async create(@Body() body: CreateNotificationBody): Promise<Notification> {
    const { authUserId, content, category } = body;

    const notifProps = {
        id: randomUUID(),
        authUserId,
        category,
        content,
        createdAt: new Date()
      } as NotificationProps;
    
    const notification = new Notification(notifProps)

    // chamando o caso de uso
    const receivedNotification = await this.sendNotification.execute(notification)

    return receivedNotification
  }
}
