/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export default class CreateNotificationBody {
  @IsNotEmpty()
  @IsUUID()
  authUserId: string;

  @Length(5, 240)
  content: string;
  
  category: string;
}
