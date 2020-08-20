import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
});

export interface Users extends mongoose.Document {
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string
    readonly passwordo: number;
}