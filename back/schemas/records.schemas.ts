import { Schema, model } from 'mongoose';

export interface RecordInterface {
  id: string;
  routineId: string;
  weight: number;
  count: number;
  isDone: boolean;
}

const RecordShema = new Schema<RecordInterface>({
  id: { type: String, required: true },
  routineId: { type: String, required: true },
  weight: { type: Number, required: true },
  count: { type: Number, required: true },
  isDone: { type: Boolean, required: true, default: false },
});

const RecordModel = model<RecordInterface>('Record', RecordShema);

export { RecordModel };

// https://mongoosejs.com/docs/typescript.html
