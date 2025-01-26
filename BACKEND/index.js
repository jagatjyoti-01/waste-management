import express from 'express';
import dotenv from 'dotenv';
import UserRoutes from './routes/user.route.js';
import AuthRoute from './routes/auth.route.js';
import ProductRoute from './routes/product.route.js';
import connectDB from "./config/db.config.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For parsing URL-encoded bodies

connectDB();

app.use('/api/user', UserRoutes);
app.use('/api/auth', AuthRoute);
app.use('/api/products', ProductRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
    success: false,
    statusCode,
    message
  });
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is Running on Port ", PORT);
});
