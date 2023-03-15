import express from 'express';
const router = express.Router();
import {
  getAllRoutines,
  getRoutine,
  postRoutine,
} from './controllers/routines';

router.get('/routines', getAllRoutines);
router.get('/routines/:id', getRoutine);
router.post('/routines', postRoutine);

export { router };
