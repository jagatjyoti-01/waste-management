import express from 'express';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoutes from './routes/user.route.js'; // Fixed path
import AuthRoute from './routes/auth.route.js';
import ProductRoute from './routes/product.route.js';
import connectDB from "./config/db.config.js";

const app = express();
dotenv.config();
app.use(express.json());

// mongoose.connect(process.env.MONGO_DB_URL)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.log(error);
//   });
console.log(process.env.MONGO_DB_URL);

connectDB();
app.use('/api/user', UserRoutes);
app.use('/api/auth', AuthRoute);
app.use('/api/products', ProductRoute); // Use the product routes

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is Running on Port ", PORT);
});