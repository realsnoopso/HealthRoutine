import { Schema, model } from 'mongoose';

interface RoutineInterface {
  id: string;
  name: string;
  totalRounds: number;
  isDone: boolean;
}

const RoutineShema = new Schema<RoutineInterface>({
  id: { type: String, required: true },
  name: { type: String, required: true },
  totalRounds: { type: Number, required: true },
  isDone: { type: Boolean, required: true, default: false },
});

const RoutineModel = model<RoutineInterface>('Routine', RoutineShema);

export { RoutineModel };
