import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cartId: {type: mongoose.Schema.Types.ObjectId, ref: "Cart"},
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Client", Schema);
