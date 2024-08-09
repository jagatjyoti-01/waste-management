import express from 'express';
import { queryController } from '../controllers/query.controller.js';

const router = express.Router();

router.get('/test', (req, res) => res.json({ message: "API is Working !!" }));

export default router;
