import { Events } from './events.model';
import { EventsService } from './events.service';
import { Controller, Post, Body, Get, Param, Put, Delete } from '@nestjs/common';

@Controller('events')
export class EventsController {
    constructor(private eventsService: EventsService) {}


    @Post('create')
    async create(@Body() events: Events): Promise<any> {
        return this.eventsService.create(events);
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<any> {
        return this.eventsService.find(id);
    }

    @Get()
    async findAll(): Promise<any> {
        return this.eventsService.findAll();
    }

    @Put('update/:id') 
    async update(@Param('id') id: string, @Body() events: Events): Promise<any> {
        return this.eventsService.update(id, events);
    }

    @Delete('delete/:id')
    async remove(@Param('id') id: string, @Body() events: Events): Promise<any> {
        return this.eventsService.remove(id), events;
    }
}
