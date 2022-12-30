import { CountUserNotifications } from './../../../app/use-cases/count-user-notifications/count-user-notifications';
/* eslint-disable prettier/prettier */
import { DeleteNotification } from './../../../app/use-cases/delete-notification/delete-notification';
import { randomUUID } from 'crypto';
import { SendNotification } from './../../../app/use-cases/send-notification/send-notification';
import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import CreateNotificationBody from '../DTOs/create-notification-body';
import { Notification, NotificationProps } from '../../../app/entities/notification/notification'


@Controller('notifications')
export class NotificationsController {
    constructor(
        private sendNotification: SendNotification,
        private deleteNotification: DeleteNotification,
        private countUserNotifications: CountUserNotifications
    ) {}

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

  @Get('count/:authUserId')
  async get(@Param("authUserId") authUserId: string): Promise<any> {

    // chamando o caso de uso
    const count = await this.countUserNotifications.execute(authUserId)

    return count
  }

  @Delete('delete/:notificationId')
  async delete(@Param("notificationId") notificationId: string): Promise<any> {
    console.log('chamou');

    // chamando o caso de uso
    const deleted = await this.deleteNotification.execute(notificationId)

    if (deleted) return {"message": "the resource was successfully deleted!"}
    else return {"message": "the resource was not found"}
  }
}
