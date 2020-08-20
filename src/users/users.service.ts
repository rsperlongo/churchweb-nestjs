import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PassportLocalModel } from 'mongoose';
import { debug } from 'console';


@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel: PassportLocalModel<any>){}
    async findAll(): Promise<any> {
        return await this.userModel.find().exec();
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    async findOne(options: object): Promise<any> {
        return await this.userModel.findOne(options).exec();
    }

    async findById(ID: number): Promise<any> {
        return await this.userModel.findById(ID).exec();
    }

    async create(): Promise<any> {
        const createdUser = new this.userModel();
        return await createdUser.save();
    }

    async update(ID: number): Promise<any> {
        const user = await this.userModel.findById(ID).exec();

        if(!user._id) {
            debug('user not found');
        }

        await this.userModel.findByIdAndUpdate().exec();
        return await this.userModel.findById(ID).exec();
    }

    async delete(ID: number): Promise<string> {
        try {
            await this.userModel.findByIdAndRemove(ID).exec();
            return 'the user has been deleted';
        }
        catch (err) {
            debug(err);
            return 'the user could not be deleted';
        }
    }
    
}
