import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import productRouter from './routes/products.js'
import connectDB from './utils/db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

connectDB();

app.use('/api/products', productRouter)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
