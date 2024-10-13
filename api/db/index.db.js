import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const db = await mongoose.connect(
      `${process.env.MONGODB_URI}/${process.env.DB_NAME}`,
    );
    // console.log(db);
    console.log('CONNECTED TO DB SUCCESSFULLY!!', db.connection.name);
  } catch (error) {
    console.log('CONNECTION TO DB FAILED!!', error.message);
  }
};

export default connectDB;
