import express from 'express';
import connectDB from './config/database.js';
import dotenv from 'dotenv';
import cors from 'cors';
import { apiLimiter } from './middleware/rateLimiter.js';
import countryRoutes from './routes/country.js';
import salesRepRoutes from './routes/salesRep.js';

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', apiLimiter);
app.use('/', countryRoutes);
app.use('/', salesRepRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
