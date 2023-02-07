import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

declare const process: {
  env: {
    NODE_ENV: string;
  };
};
// https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html

function connect() {
  mongoose
    .connect(process.env['CONNECT_URL'], {
      ignoreUndefined: true,
    })
    .catch((err) => {
      console.error(err);
    });
}

export { connect };
