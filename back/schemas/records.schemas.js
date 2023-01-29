import mongoose from 'mongoose';

const Record = mongoose.model('Record', {
  title: String,
  description: String,
});

export { Record };
