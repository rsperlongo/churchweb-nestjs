import { Injectable } from '@nestjs/common';
import { Members } from './members.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MembersService {
  constructor(
    @InjectModel('Members') private readonly members: Model<Members>) {
  }

  async create(members: Members): Promise<any> {
    const result = await new this.members(members).save();
    return result.id;
  }

  async findAll(): Promise<any> {
    return await this.members.find().exec();
  }

  async find(id: string): Promise<any> {
    return await this.members.findById(id).exec();
  }

  async update( id: string, members: Members): Promise<any> {
    return await this.members.findByIdAndUpdate(id, members);
  }

  async remove(id: string): Promise<any> {
    return await this.members.findByIdAndRemove(id)
  }
}
