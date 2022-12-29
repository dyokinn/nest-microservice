import { HttpModule } from './infra/http/http.module';
import { Module } from '@nestjs/common';
import { NotificationsController } from './infra/http/controllers/notifications.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [],
  providers: [],
}) 
export class AppModule {}
