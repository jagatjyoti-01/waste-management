import mongoose from "mongoose";
<<<<<<< HEAD
import validator from "validator";
=======
>>>>>>> origin/Sumanta

const vendorSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
<<<<<<< HEAD
        trim: true,
        minlength: 3,
        maxlength: 30
=======
>>>>>>> origin/Sumanta
    },
    email: {
        type: String,
        required: true,
        unique: true,
<<<<<<< HEAD
        validate: [validator.isEmail, 'Invalid email address']
=======
>>>>>>> origin/Sumanta
    },
    password: {
        type: String,
        required: true,
<<<<<<< HEAD
        minlength: 6
    },
    profilePicture: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
=======
    },
    profilePicture: {
        type: String,
        default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
>>>>>>> origin/Sumanta
    }
}, { timestamps: true });

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
