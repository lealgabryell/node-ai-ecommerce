import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  productListIds: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Product",
    default: [],
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
    required: true,
  },
  totalPrice: { type: Number, default: 0.0 },
  paymentId: { type: mongoose.Schema.Types.ObjectId, ref: "Payment" },
});

export default mongoose.model("Cart", Schema);
