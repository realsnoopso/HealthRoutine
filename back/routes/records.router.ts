import express from 'express';
const router = express.Router();
import {
  getAllRecords,
  getRecord,
  postRecord,
  getLastRecord,
} from './controllers/records';

router.get('/records', getAllRecords);
router.get('/record', getRecord);
router.get('/record/last', getLastRecord);
router.post('/record', postRecord);

export { router };
