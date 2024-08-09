import express from 'express';
import { queryController } from '../controllers/query.controller.js'; // Import the queryController

const router = express.Router();

router.post('/signup', (req, res, next) => queryController({ ...req, params: { model: 'user', action: 'signup' } }, res, next));
router.post('/signin', (req, res, next) => queryController({ ...req, params: { model: 'user', action: 'signin' } }, res, next));

export default router;
