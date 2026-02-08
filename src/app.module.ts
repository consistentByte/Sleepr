import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from '@app/common/database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
