import express from 'express';
const router = express.Router();
import insertOne from "../controllers/userController.js"
router.route('/')
  .post((req, res) => insertOne(req, res));

export default router