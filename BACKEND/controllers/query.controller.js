import { User } from '../models/index.js';
import { Vendor } from '../models/index.js';
import { Product } from '../models/index.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import { errorHandler } from '../utils/error.js';

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

// Main controller function
export const queryController = async (req, res, next) => {
    const { action, model, id } = req.params;

    console.log(`QueryController Params: ${JSON.stringify({ action, model, id })}`);

    try {
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
    } catch (error) {
        next(error);
    }
};

// Handle CRUD for User and Vendor
const handleAuthActions = async (req, res, next, model, action) => {
    const { username, email, password, role, oldPassword, newPassword } = req.body;
    const { id } = req.params; // This assumes that id is in the URL params

    try {
        if (action === 'signup') {
            // Signup logic
            if (!username || !email || !password || !role || (role !== 'user' && role !== 'vendor')) {
                return next(errorHandler(400, 'All fields are required and role must be either "user" or "vendor"'));
            }

            // Check if the email is already in use by a user or vendor
            const existingUser = await User.findOne({ email });
            const existingVendor = await Vendor.findOne({ email });

            if (existingUser && role === 'vendor') {
                return next(errorHandler(400, 'Email already in use by a user'));
            }
            if (existingVendor && role === 'user') {
                return next(errorHandler(400, 'Email already in use by a vendor'));
            }

            if (password.length < 6) {
                return next(errorHandler(400, 'Password must be at least 6 characters long'));
            }

            const hashedPassword = bcryptjs.hashSync(password, 10);
            const userData = { username, email, password: hashedPassword, role };

            if (model === 'user') {
                if (role !== 'user') {
                    return next(errorHandler(400, 'Role mismatch: Cannot signup as user with vendor role'));
                }
                const newUser = new User(userData);
                await newUser.save();
                res.json({ message: "User Signup Successful" });
            } else if (model === 'vendor') {
                if (role !== 'vendor') {
                    return next(errorHandler(400, 'Role mismatch: Cannot signup as vendor with user role'));
                }
                const newVendor = new Vendor(userData);
                await newVendor.save();
                res.json({ message: "Vendor Signup Successful" });
            }
        } else if (action === 'signin') {
            // Signin logic
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
        } else if (action === 'updatePassword') {
            // Update Password logic
            if (!id || !oldPassword || !newPassword) {
                return next(errorHandler(400, 'ID, oldPassword, and newPassword are required'));
            }
            if (newPassword.length < 6) {
                return next(errorHandler(400, 'New password must be at least 6 characters long'));
            }

            const user = model === 'user' ? await User.findById(id) : await Vendor.findById(id);
            if (!user) {
                return next(errorHandler(404, 'User or Vendor not found'));
            }

            const isOldPasswordValid = bcryptjs.compareSync(oldPassword, user.password);
            if (!isOldPasswordValid) {
                return next(errorHandler(400, 'Old password is incorrect'));
            }

            const hashedNewPassword = bcryptjs.hashSync(newPassword, 10);
            user.password = hashedNewPassword;
            await user.save();

            res.status(200).json({ success: true, message: "Password updated successfully" });
        } else if (action === 'getAll') {
            const data = model === 'user' ? await User.find() : await Vendor.find();
            res.status(200).json({ success: true, data });
        } else if (action === 'getById') {
            if (!id) {
                return next(errorHandler(400, 'ID parameter is missing'));
            }

            const data = model === 'user' ? await User.findById(id) : await Vendor.findById(id);
            if (!data) {
                return res.status(404).json({ success: false, message: "Data not found" });
            }
            res.status(200).json({ success: true, data });
        } else if (action === 'update') {
            if (!id) {
                return next(errorHandler(400, 'ID parameter is missing'));
            }

            const updateData = req.body;
            const data = model === 'user' ? await User.findByIdAndUpdate(id, updateData, { new: true }) : await Vendor.findByIdAndUpdate(id, updateData, { new: true });
            if (!data) {
                return res.status(404).json({ success: false, message: "Data not found" });
            }
            res.status(200).json({ success: true, data });
        } else if (action === 'delete') {
            if (!id) {
                return next(errorHandler(400, 'ID parameter is missing'));
            }

            const data = model === 'user' ? await User.findByIdAndDelete(id) : await Vendor.findByIdAndDelete(id);
            if (!data) {
                return res.status(404).json({ success: false, message: "Data not found" });
            }
            res.status(200).json({ success: true, message: "Data deleted successfully" });
        }
    } catch (error) {
        next(error);
    }
};  


// Handle CRUD for Product
const handleProductActions = async (req, res, next, action) => {
    try {
        if (action === 'create') {
            const { name, description, price, category, stock } = req.body;
            const imageFilename = req.file ? req.file.filename : null;

            // Validate product data
            if (!name || !price || !category) {
                return next(errorHandler(400, 'Name, price, and category are required'));
            }
            if (price < 0) {
                return next(errorHandler(400, 'Price must be a positive number'));
            }

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
};
