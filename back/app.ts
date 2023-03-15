import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connect } from './schemas/index.schemas';
import { router as RecordsRouter } from './routes/records.router';
import { router as RoutinesRouter } from './routes/routines.router';

export const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
connect();

app.use('/', [RecordsRouter, RoutinesRouter]);

app.listen(port, () => {
  console.log(`start ${port}`);
});
