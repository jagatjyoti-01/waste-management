// product.route.js
import express from 'express';
import { handleFileUpload, queryController } from '../controllers/query.controller.js';

const router = express.Router();

router.post('/', handleFileUpload, (req, res, next) => 
    queryController({ ...req, params: { model: 'product', action: 'create' } }, res, next)
);

router.get('/', (req, res, next) => 
    queryController({ ...req, params: { model: 'product', action: 'getAll' } }, res, next)
);

router.get('/:id', (req, res, next) => 
    queryController({ ...req, params: { model: 'product', action: 'getById', id: req.params.id } }, res, next)
);

router.put('/:id', handleFileUpload, (req, res, next) => 
    queryController({ ...req, params: { model: 'product', action: 'update', id: req.params.id } }, res, next)
);

router.delete('/:id', (req, res, next) => 
    queryController({ ...req, params: { model: 'product', action: 'delete', id: req.params.id } }, res, next)
);

export default router;
