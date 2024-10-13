import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {port} from './constants.js';
import connectDB from './db/index.db.js';

dotenv.config({
  path: './.env',
});

const app = express();

// const corsOptions = {
//   origin:
//     'https://3000-idx-rajasthanwayfarersfe-172043481537…qyfcabgo6.cloudworkstations.dev/',
//   methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
//   allowedHeaders: ['Content-Type', 'Authorization'],
//   credentials: true, // Enable credentials (cookies, authorization headers) cross-origin
// };

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, async () => {
  await connectDB();
  console.log(`Server is running on: http://localhost:${port}`);
});
