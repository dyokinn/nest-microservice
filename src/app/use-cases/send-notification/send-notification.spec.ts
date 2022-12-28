import { Notification, NotificationProps } from "../../entities/notification/notification";
import { SendNotification } from "./send-notification";

const localNotificationsRepository = {
    async create(notification: Notification) {
        console.log("bau")
    }
}

test('it should be able to send a notification', async () => {
    const notifProps = {
      category: 'social',
      content: 'Ola, voce tem uma nova mensagem nao lida!',
      createdAt: new Date()
    } as NotificationProps;
  
    const notification = new Notification(notifProps)
    const sendNotification = new SendNotification(localNotificationsRepository)

    const result = await sendNotification.execute("teste", notification, localNotificationsRepository)

    expect(result).toBeTruthy();
  });