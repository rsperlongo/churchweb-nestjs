import { MembersService } from './members.service';
import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { Members } from './members.model';

@Controller('members')
export class MembersController {
    constructor(private service: MembersService) {

    }

    @Post('create')
    async create(@Body() members: Members): Promise<any> {
        return this.service.create(members);
    }

    @Get(':id')
    async find(@Param('id') id: string): Promise<any> {
        return this.service.find(id);
    }

    @Get()
    async findAll(): Promise<any> {
        return this.service.findAll();
    }

    @Put('update/:id') 
    async update(@Param('id') id: string, @Body() members: Members): Promise<any> {
        return this.service.update(id, members);
    }

    @Delete('delete/:id')
    async remove(@Param('id') id: string, @Body() members: Members): Promise<any> {
        return this.service.remove(id), members;
    } 

}