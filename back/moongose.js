import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const username = process.env.MONGO_USER_NAME;
const password = process.env.MONGO_PASSWORD;

await mongoose.connect(
  `mongodb+srv://${username}:${password}@cluster0.a6hm0qv.mongodb.net/HealthRoutine?retryWrites=true&w=majority`
);

const router = express.Router();

const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

const Record = mongoose.model('Record', {
  title: String,
  description: String,
});

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
