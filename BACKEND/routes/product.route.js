import express from 'express';
import { createProduct, getAllProducts, getProductById, updateProduct, deleteProduct, upload } from '../controllers/product.controller.js';

const router = express.Router();

router.post('/', upload.single('image'), createProduct); // 'image' is the field name used in the form
router.get('/', getAllProducts);
router.get('/:id', getProductById);
router.put('/:id', upload.single('image'), updateProduct);
router.delete('/:id', deleteProduct);

export default router;
