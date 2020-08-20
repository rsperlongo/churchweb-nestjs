import * as mongoose from 'mongoose';

export const MembersSchema = new mongoose.Schema({
   name: { type: String, required: true },
   birthday: { type: String, required: true},
   city: { type: String, required: true },
   phone: { type: Number, required: true},
   email: { type: String, required: true},
   baptized: { type: String, required: true}
});

export interface Members extends mongoose.Document {
   readonly id: string;
   readonly birthday: string;
   readonly city: string
   readonly phone: number;
   readonly email: string;
   readonly baptized: string;
}