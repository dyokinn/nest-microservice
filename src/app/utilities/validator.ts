import { NotificationProps } from '../entities/notification/notification';

/* eslint-disable prettier/prettier */
export default class Validator {
    static validate = {
        notification: function (notification: NotificationProps): boolean {
            if (notification.content.length < 5) {
                return false
            }

            else return true
        }
    }
}