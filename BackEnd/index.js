import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import productRouter from "./src/routers/productRouter.js";
import userRouter from "./src/routers/userRouter.js";
import cartRouter from "./src/routers/cartRouter.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/product", productRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use(cors());

//connecta com db e emite ok
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected!");
    app.emit("ok");
  })
  .catch((err) => {
    console.log("Database connection error", err);
  });

//responde a emissao do ok e inicia o servidor
app.on("ok", () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
  });
});
