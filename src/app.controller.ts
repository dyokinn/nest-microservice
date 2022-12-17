/* eslint-disable prettier/prettier */
import { PrismaService } from './prisma.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { Notification } from '@prisma/client';
import { randomUUID } from 'crypto';
import CreateNotificationBody from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('list')
  async list(): Promise<Notification[]> {
    return await this.prisma.notification.findMany();
  }

  @Post('create')
  async create(@Body() body: CreateNotificationBody): Promise<Notification> {
    const { authUserId, content, category } = body;
    
    return await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        authUserId
      },
    });
  }
}
