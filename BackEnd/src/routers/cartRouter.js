import express from 'express';
const router = express.Router();

router.route('/:id')
  .get(() => console.log("GET cart/:id"));
router.route('/')
  .get(() => console.log("GET cart/"));

export default router