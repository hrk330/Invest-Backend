import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';
import { mongoURI } from './config/keys';
import { UsersModule } from './users/users.module';

@Module({
  imports: [MongooseModule.forRoot(mongoURI), UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
