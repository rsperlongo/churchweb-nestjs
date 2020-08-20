import { UsersSchema } from './users.model';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Module } from '@nestjs/common';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }])],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService, MongooseModule.forFeature([{ name: 'User', schema: UsersSchema }])],
})
export class UsersModule {}
