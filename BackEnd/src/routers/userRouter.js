import express from 'express';
const router = express.Router();

router.route('/:id')
  .get(() => console.log("GET user/:id"));
router.route('/')
  .get(() => console.log("GET user/"));

export default router