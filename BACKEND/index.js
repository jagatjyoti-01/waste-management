<<<<<<< HEAD
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
=======
import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoutes from '../BACKEND/routes/user.route.js';
import AuthRoute from './routes/auth.route.js';
const app = express();
dotenv.config();
app.use(express.json());
console.log(process.env.MONGO_DB_URL);
mongoose.connect(process.env.MONGO_DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.log(error);
  });

  app.listen(3000, () => {
    console.log('Server is Running on Port 3000');
  });


app.use('/api/user', UserRoutes);
app.use('/api/auth',AuthRoute);
app.use((err,req,res,next) =>{
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  res.status(statusCode).json({
      success:false,
      statusCode,
      message
  })

})

// app.get('/test',(req,res) =>{
//   res.json({message:"API is Working !!"})
// })
>>>>>>> origin/Sumanta
