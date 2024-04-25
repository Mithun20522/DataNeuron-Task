import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { connectDB } from './db/connectMongoDB.js';
import testdataRouter from './routes/testdata.route.js';
import morgan from 'morgan';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());
// app.use(morgan('dev'));

const PORT = process.env.PORT || 3000;
const MONGO_DB_URL = process.env.MONGO_DB_URL;

connectDB(MONGO_DB_URL);

app.get('/', (req, res) => {
    return res.status(200).json({message:'Test API Working...'})
})

app.use('/api/testdata',testdataRouter);

app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`));