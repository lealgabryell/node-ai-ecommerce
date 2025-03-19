import express from 'express';
const router = express.Router();

router.route('/:id')
  .get(() => console.log("GET payment/:id"));
router.route('/')
  .get(() => console.log("GET payment/"));

export default router