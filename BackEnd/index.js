import express from "express";
import cors from 'cors';
import productRouter from './src/routers/productRouter.js'
import userRouter from './src/routers/userRouter.js'
import cartRouter from './src/routers/cartRouter.js'
import dotenv from 'dotenv'
dotenv.config();
const app = express();

app.use('/api/product', productRouter);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);

app.use(cors());
app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
})