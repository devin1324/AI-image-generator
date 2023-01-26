import mongoose from 'mongoose';

function connectDB(url) {
  mongoose.set('strictQuery', true);

  mongoose
    .connect(url)
    .then(() => console.log('MongoDB connected'))
    .then((err) => console.log(err));
}

export default connectDB;
