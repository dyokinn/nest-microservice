import { InMemoryNotificationsRepository } from '../../repositories/notifications/in-memory-notifications-repository'
import { Notification, NotificationProps } from "../../entities/notification/notification";
import { SendNotification } from "../send-notification/send-notification";

test('it should be able to delete a notification', async () => {
    const notifProps = {
      category: 'social',
      content: 'Ola, voce tem uma nova mensagem nao lida!',
      createdAt: new Date()
    } as NotificationProps;
  
    const notification = new Notification(notifProps)

    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationsRepository)

    const receivedNotification = await sendNotification.execute(notification)
    expect(notificationsRepository.notifications).toHaveLength(1);
  });