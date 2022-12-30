import { InMemoryNotificationsRepository } from '../../repositories/notifications/in-memory-notifications-repository'
import { Notification, NotificationProps } from "../../entities/notification/notification";
import { CountUserNotifications } from "./count-user-notifications";

test('it should be able to send a notification', async () => {
    const notifProps = {
      category: 'social',
      content: 'Ola, voce tem uma nova mensagem nao lida!',
      createdAt: new Date()
    } as NotificationProps;
  
    const notification = new Notification(notifProps)

    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new CountUserNotifications(notificationsRepository)

    const receivedNotification = await sendNotification.execute(notification)
    expect(notificationsRepository.notifications).toHaveLength(1);
  });