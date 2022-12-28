/* eslint-disable prettier/prettier */
import { Notification, NotificationProps } from './notification';

test('it should be able to create a notification', () => {
  const notifProps = {
    category: 'social',
    content: 'Ola, voce tem uma nova mensagem nao lida!',
    createdAt: new Date()
  } as NotificationProps;

  const valid = new Notification(notifProps)

  expect(valid).toBeTruthy();
});

test('it should throw an  content validation error when creating a notification', () => {
    const notifProps = {
      category: 'social',
      content: 'Ol',
      createdAt: new Date()
    } as NotificationProps;
  

    expect(() => {
        const valid = new Notification(notifProps)
    }).toThrow();
});
