import { RecordModel } from '../../schemas/records.schemas';
import { Request, Response } from 'express';
const uuid = require('uuid');

export const getAllRecords = async (req: Request, res: Response) => {
  try {
    const result = await RecordModel.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching records' });
  }
};

export const getRecord = async (req: Request, res: Response) => {
  const id = req.query.id;
  try {
    const result: any = await RecordModel.findOne({ id });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching record details' });
  }
};

export const getLastRecord = async (req: Request, res: Response) => {
  const routine_id = req.query.routine_id;
  try {
    const data: any = await RecordModel.find({ routine_id });
    const result = data[data.length - 1];
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching record details' });
  }
};

export const postRecord = async (req: Request, res: Response) => {
  const { routineId, weight, count, isDone } = req.body;
  const id = uuid.v4();
  try {
    const result = await RecordModel.create({
      id,
      routineId,
      weight,
      count,
      isDone,
    });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
