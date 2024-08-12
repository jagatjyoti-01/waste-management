import User from "../models/user.model.js";
import Vendor from "../models/vender.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
    const { username, email, password, role } = req.body;

    if (!username || !email || !password || !role || (role !== 'user' && role !== 'vendor')) {
        return next(errorHandler(400, 'All fields are required and role must be either "user" or "vendor"...'));
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const userData = {
        username,
        email,
        password: hashedPassword,
    };

    try {
        if (role === 'user') {
            const newUser = new User(userData);
            await newUser.save();
            res.json({ message: "User Signup Successful..." });
        } else if (role === 'vendor') {
            const newVendor = new Vendor(userData);
            await newVendor.save();
            res.json({ message: "Vendor Signup Successful..." });
        }
    } catch (error) {
        next(error);
    }
}


export const signin = async (req, res, next) => {
    const { email, password, role } = req.body;

    if (!email || !password || !role || (role !== 'user' && role !== 'vendor')) {
        return next(errorHandler(400, 'All Fields are required and role must be either "user" or "vendor"...'));
    }

    try {
        let validUser;
        if (role === 'user') {
            validUser = await User.findOne({ email });
        } else if (role === 'vendor') {
            validUser = await Vendor.findOne({ email });
        }

        if (!validUser) {
            return next(errorHandler(404, 'User or Vendor not found'));
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(400, 'Invalid Password'));
        }

        const token = jwt.sign({ id: validUser._id, role: validUser.role }, process.env.JWT_SECRET);
        const { password: pass, ...rest } = validUser._doc;

        res.status(200).cookie('access_token', token, {
            httpOnly: true
        }).json(rest);
    } catch (error) {
        next(error);
    }
}
