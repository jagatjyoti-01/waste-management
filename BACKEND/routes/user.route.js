<<<<<<< HEAD
import express from 'express';
import { queryController } from '../controllers/query.controller.js';

const router = express.Router();

router.get('/test', (req, res) => res.json({ message: "API is Working !!" }));

export default router;
=======
import express from 'express'
import { test } from '../controllers/user.controller.js';

const router = express.Router(); 


router.get('/test',test)

export default router;
>>>>>>> origin/Sumanta
