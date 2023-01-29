import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

function connect() {
  mongoose
    .connect(process.env.CONNECT_URL, {
      ignoreUndefined: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.error(err);
    });
}

export { connect };
