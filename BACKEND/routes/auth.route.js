import express from 'express';
<<<<<<< HEAD
import { queryController } from '../controllers/query.controller.js';

const router = express.Router(); // This creates the router object

// User routes
router.post('/user/signup', (req, res, next) => queryController({ ...req, params: { model: 'user', action: 'signup' } }, res, next));
router.post('/user/signin', (req, res, next) => queryController({ ...req, params: { model: 'user', action: 'signin' } }, res, next));
router.post('/user/updatePassword', (req, res, next) => {
    queryController({ ...req, params: { model: 'user', action: 'updatePassword', id: req.body.id }, body: req.body }, res, next);
});

router.get('/user', (req, res, next) => queryController({ ...req, params: { model: 'user', action: 'getAll' } }, res, next));
router.get('/user/:id', (req, res, next) => queryController({ ...req, params: { model: 'user', action: 'getById', id: req.params.id } }, res, next));
router.put('/user/:id', (req, res, next) => queryController({ ...req, params: { model: 'user', action: 'update', id: req.params.id }, body: req.body }, res, next));
router.delete('/user/:id', (req, res, next) => queryController({ ...req, params: { model: 'user', action: 'delete', id: req.params.id } }, res, next));

// Vendor routes
router.post('/vendor/signup', (req, res, next) => queryController({ ...req, params: { model: 'vendor', action: 'signup' } }, res, next));
router.post('/vendor/signin', (req, res, next) => queryController({ ...req, params: { model: 'vendor', action: 'signin' } }, res, next));
router.post('/vendor/updatePassword', (req, res, next) => {
    queryController({ ...req, params: { model: 'vendor', action: 'updatePassword', id: req.body.id }, body: req.body }, res, next);
});

router.get('/vendor', (req, res, next) => queryController({ ...req, params: { model: 'vendor', action: 'getAll' } }, res, next));
router.get('/vendor/:id', (req, res, next) => queryController({ ...req, params: { model: 'vendor', action: 'getById', id: req.params.id } }, res, next));
router.put('/vendor/:id', (req, res, next) => queryController({ ...req, params: { model: 'vendor', action: 'update', id: req.params.id }, body: req.body }, res, next));
router.delete('/vendor/:id', (req, res, next) => queryController({ ...req, params: { model: 'vendor', action: 'delete', id: req.params.id } }, res, next));
=======
import { signup, signin } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
>>>>>>> origin/Sumanta

export default router;
