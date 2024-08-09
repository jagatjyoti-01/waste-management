import Product from '../models/product.model.js';
import multer from 'multer';
import path from 'path';

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder to store uploaded images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Rename the file to avoid conflicts
    }
});

// Create the upload middleware using multer
export const upload = multer({ storage: storage });

// Create a new product
export const createProduct = async (req, res, next) => {
    try {
        const { name, description, price, category, stock } = req.body;
        const imageFilename = req.file ? req.file.filename : null;

        const product = new Product({
            name,
            description,
            price,
            category,
            stock,
            imageFilename
        });

        await product.save();
        res.status(201).json({ success: true, product });
    } catch (err) {
        next(err);
    }
};

// Retrieve all products
export const getAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json({ success: true, products });
    } catch (err) {
        next(err);
    }
};

// Retrieve a single product by ID
export const getProductById = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, product });
    } catch (err) {
        next(err);
    }
};

// Update a product
export const updateProduct = async (req, res, next) => {
    try {
        const { name, description, price, category, stock } = req.body;
        const imageFilename = req.file ? req.file.filename : null;

        const updateData = {
            name,
            description,
            price,
            category,
            stock
        };

        if (imageFilename) {
            updateData.imageFilename = imageFilename;
        }

        const product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, product });
    } catch (err) {
        next(err);
    }
};

// Delete a product
export const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) {
            return res.status(404).json({ success: false, message: "Product not found" });
        }
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    } catch (err) {
        next(err);
    }
};
