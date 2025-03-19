import mongoose from "mongoose";
const Schema = new mongoose.Schema({
  userId: { type: String, unique: true },
  nome: { type: String, required: true },
  endereco: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  email: { type: String, required: true },
  senha: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("User", Schema);
