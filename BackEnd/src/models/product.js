import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  productId: { type: String, required: true, unique: true },
  descricao: { type: String, required: true },
  marca: { type: String, required: true },
  tipo: { type: String, required: true },
  valor: { type: Number, required: true },
  imageUrl: {
    type: String,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg",
  },
  desconto: { type: Number, default: 0.0 },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Product", Schema);
