import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 100
    },
    description: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive']
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        default: 0,
        min: [0, 'Stock must be zero or positive']
    },
    imageFilename: {
        type: String
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
