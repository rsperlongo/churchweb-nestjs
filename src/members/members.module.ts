import { MembersSchema } from './members.model';
import { Module } from '@nestjs/common';
import { MembersController } from './members.controller';
import { MembersService } from './members.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Members', schema: MembersSchema,
    }]),
  ],
  controllers: [MembersController],
  providers: [MembersService]
})
export class MembersModule {}
