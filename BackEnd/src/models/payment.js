import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  paymentId: { type: String, required: true, unique: true },
  status: { type: Boolean, default: false },
  valorTotal: { type: Number, required: true },
});
