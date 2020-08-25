import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { MembersModule } from './members/members.module';
import { EventsModule } from './events/events.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/churchweb-database'),
    MembersModule,
    UsersModule,
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}


