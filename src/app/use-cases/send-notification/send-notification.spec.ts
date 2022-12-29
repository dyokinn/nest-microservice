import { InMemoryNotificationsRepository } from '../../repositories/notifications/in-memory-notifications-repository'
import { Notification, NotificationProps } from "../../entities/notification/notification";
import { SendNotification } from "./send-notification";

test('it should be able to send a notification', async () => {
    const notifProps = {
      category: 'social',
      content: 'Ola, voce tem uma nova mensagem nao lida!',
      createdAt: new Date()
    } as NotificationProps;
  
    const notification = new Notification(notifProps)

    const notificationsRepository = new InMemoryNotificationsRepository()
    const sendNotification = new SendNotification(notificationsRepository)

    const receivedNotification = await sendNotification.execute("teste", notification)
    expect(notificationsRepository.notifications).toHaveLength(1);
  });