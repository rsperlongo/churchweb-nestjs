import { EventsSchema } from './events.model';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Events', schema: EventsSchema
    }])
  ],
  controllers: [EventsController],
  providers: [EventsService]
})
export class EventsModule {}
