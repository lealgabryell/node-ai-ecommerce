import express from 'express';
const router = express.Router();

router.route('/:id')
  .get(() => console.log("GET product/:id"));
router.route('/')
  .get(() => console.log("GET product/"));

export default router