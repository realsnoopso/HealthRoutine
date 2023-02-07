import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connect } from './schemas/index.schemas.js';
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
connect();

import { Record } from './schemas/records.schemas.js';
import { Routine } from './schemas/';

const router = express.Router();

app.post('/records', (req, res) => {
  const record = new Record(req.body);
  record
    .save()
    .then((result) => {
      res.status(201).json({ message: 'Record created successfully' });
    })
    .catch((error) => {
      res.status(500).json({ message: 'Error saving record' });
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default router;
