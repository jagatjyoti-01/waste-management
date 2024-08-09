import User from "../models/user.model.js";
import Vendor from "../models/vender.model.js"; 
import Product from '../models/product.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import { errorHandler } from "../utils/error.js";

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Folder to store uploaded images
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Rename the file to avoid conflicts
    }
});

const upload = multer({ storage: storage });

export const handleFileUpload = upload.single('image');

export const queryController = async (req, res, next) => {
    const { action, model, id } = req.params;

    switch (model) {
        case 'user':
        case 'vendor':
            await handleAuthActions(req, res, next, model, action);
            break;
        case 'product':
            await handleProductActions(req, res, next, action);
            break;
        default:
            return next(errorHandler(400, 'Invalid model'));
    }
};

const handleAuthActions = async (req, res, next, model, action) => {
    const { username, email, password, role } = req.body;

    try {
        if (action === 'signup') {
            if (!username || !email || !password || !role || (role !== 'user' && role !== 'vendor')) {
                return next(errorHandler(400, 'All fields are required and role must be either "user" or "vendor"...'));
            }

            const hashedPassword = bcryptjs.hashSync(password, 10);
            const userData = { username, email, password: hashedPassword, role };

            if (model === 'user') {
                const newUser = new User(userData);
                await newUser.save();
                res.json({ message: "User Signup Successful..." });
            } else if (model === 'vendor') {
                const newVendor = new Vendor(userData);
                await newVendor.save();
                res.json({ message: "Vendor Signup Successful..." });
            }
        } else if (action === 'signin') {
            const { email, password } = req.body;

            const validUser = model === 'user' ? await User.findOne({ email }) : await Vendor.findOne({ email });

            if (!validUser) {
                return next(errorHandler(404, 'User or Vendor not found'));
            }

            const validPassword = bcryptjs.compareSync(password, validUser.password);
            if (!validPassword) {
                return next(errorHandler(400, 'Invalid Password'));
            }

            const token = jwt.sign({ id: validUser._id, role: validUser.role }, process.env.JWT_SECRET);
            const { password: pass, ...rest } = validUser._doc;

            res.status(200).cookie('access_token', token, { httpOnly: true }).json(rest);
        }
    } catch (error) {
        next(error);
    }
};

const handleProductActions = async (req, res, next, action) => {
    handleFileUpload(req, res, async () => {
        try {
            if (action === 'create') {
                const { name, description, price, category, stock } = req.body;
                const imageFilename = req.file ? req.file.filename : null;

                const product = new Product({ name, description, price, category, stock, imageFilename });
                await product.save();
                res.status(201).json({ success: true, product });
            } else if (action === 'getAll') {
                const products = await Product.find();
                res.status(200).json({ success: true, products });
            } else if (action === 'getById') {
                const product = await Product.findById(req.params.id);
                if (!product) {
                    return res.status(404).json({ success: false, message: "Product not found" });
                }
                res.status(200).json({ success: true, product });
            } else if (action === 'update') {
                const { name, description, price, category, stock } = req.body;
                const imageFilename = req.file ? req.file.filename : null;

                const updateData = { name, description, price, category, stock };
                if (imageFilename) {
                    updateData.imageFilename = imageFilename;
                }

                const product = await Product.findByIdAndUpdate(req.params.id, updateData, { new: true });
                if (!product) {
                    return res.status(404).json({ success: false, message: "Product not found" });
                }
                res.status(200).json({ success: true, product });
            } else if (action === 'delete') {
                const product = await Product.findByIdAndDelete(req.params.id);
                if (!product) {
                    return res.status(404).json({ success: false, message: "Product not found" });
                }
                res.status(200).json({ success: true, message: "Product deleted successfully" });
            }
        } catch (err) {
            next(err);
        }
    });
};
