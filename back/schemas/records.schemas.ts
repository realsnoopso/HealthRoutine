import { Schema, model } from 'mongoose';

export interface IRecord {
  id: string;
  roundId: string;
  weight: number;
  count: number;
}

const RecordShema = new Schema<IRecord>({
  id: { type: String, required: true },
  roundId: { type: String, required: true },
  weight: { type: Number, required: true },
  count: { type: Number, required: true },
});

const Record = model<IRecord>('Record', RecordShema);

export { Record };

// https://mongoosejs.com/docs/typescript.html
