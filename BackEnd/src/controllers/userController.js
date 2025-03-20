import User from '../models/user.js';
import { randomUUID } from 'node:crypto'
import bcrypt from 'bcrypt';
import dotenv from "dotenv";
dotenv.config();
import jwtService from "jsonwebtoken";

const generateUuid = () => {
  return `user-${randomUUID()}`;
}

const insertOne = async (req, res) => {
  try {
    const { nome, endereco, cpf, email, senha } = req.body;
    if (!nome || !endereco || !cpf || !email || !senha) {
      throw new Error("Invalid information!");
    } else {
      const userId = generateUuid();

      const newUser = new User({
        userId,
        nome,
        endereco,
        cpf,
        email,
        senha
      });
      newUser.senha = await bcrypt.hash(newUser.senha, Number(process.env.SALT));
      await newUser.save();

      res.status(201).json({ message: "User created!", User: { userId, nome, email } })
    }
  } catch (e) {
    if (e.messgae == "Invalid information!") {
      res.status(400).json({ message: e.message, error: e })
    } else {
      res.status(500).json({ message: e.message })
    }
  }
}

export default insertOne;