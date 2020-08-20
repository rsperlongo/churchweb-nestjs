import { Events } from './events.model';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class EventsService {
    constructor(@InjectModel('Events') private readonly events: Model<Events>) {

    }

    async create(events: Events): Promise<any> {
        const result = await new this.events(events).save();
        return result.id;
    }

    async findAll(): Promise<any> {
        return await this.events.find().exec();
    }

    async find(id: string): Promise<any> {
        return await this.events.findById(id).exec();
    }

    async update( id: string, events: Events): Promise<any> {
        return await this.events.findByIdAndUpdate(id, events);
    }

    async remove(id: string): Promise<any> {
        return await this.events.findByIdAndRemove(id)
    }
}
