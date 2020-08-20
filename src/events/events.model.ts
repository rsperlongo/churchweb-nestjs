import * as mongoose from 'mongoose';

export const EventsSchema = new mongoose.Schema({
   category: { type: String, required: true },
   local: { type: String, required: true},
   date: { type: String, required: true },
   description: { type: Number, required: true},
   envolved: { type: String, required: true},
});

export interface Events extends mongoose.Document {
   readonly id: string;
   readonly category: string;
   readonly local: string;
   readonly date: string;
   readonly description: number;
   readonly envolved: string;
}