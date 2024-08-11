import express from 'express';
import { handleFileUpload, queryController } from '../controllers/query.controller.js';

const router = express.Router();

// Add the model parameter to the routes
router.post('/', handleFileUpload, (req, res, next) => queryController({ ...req, params: { action: 'create', model: 'product' } }, res, next));
router.get('/', (req, res, next) => queryController({ ...req, params: { action: 'getAll', model: 'product' } }, res, next));
router.get('/:id', (req, res, next) => queryController({ ...req, params: { action: 'getById', model: 'product', id: req.params.id } }, res, next));
router.put('/:id', handleFileUpload, (req, res, next) => queryController({ ...req, params: { action: 'update', model: 'product', id: req.params.id } }, res, next));
router.delete('/:id', (req, res, next) => queryController({ ...req, params: { action: 'delete', model: 'product', id: req.params.id } }, res, next));

export default router;
