import { Schema, model } from 'mongoose';
import { IRecord } from './records.schemas.js';

interface Routine {
  id: string;
  name: string;
  record: IRecord;
  count: number;
}

const RoutineShema = new Schema<Routine>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  record: String,
  count: { type: Number, required: true },
});

const Routine = model<Routine>('Routine', RoutineShema);

export { Routine };
