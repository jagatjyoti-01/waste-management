import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    stock: {
        type: Number,
        default: 0,
    },
    imageFilename: {
        type: String, // Store the image filename instead of the URL
    },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

export default Product;
