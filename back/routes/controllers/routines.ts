import { RoutineModel } from '../../schemas/routines.schemas';
import { RecordModel } from '../../schemas/records.schemas';
import { Request, Response } from 'express';
const uuid = require('uuid');

const getAllRoutines = async (req: Request, res: Response) => {
  try {
    const result = await RoutineModel.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching records' });
  }
};

const getRoutine = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    let result: any = await RoutineModel.findOne({ id });

    result['records'] = 'test';
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching record details' });
  }
};

const postRoutine = async (req: Request, res: Response) => {
  const { name, totalRounds } = req.body;
  try {
    const id = uuid.v4();
    const result = await RoutineModel.create({ id, name, totalRounds });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export { getAllRoutines, getRoutine, postRoutine };
