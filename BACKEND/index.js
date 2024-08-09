import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoutes from '../BACKEND/routes/user.route.js';
import AuthRoute from './routes/auth.route.js';
import ProductRoute from './routes/product.route.js';



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
app.use('/api/products', ProductRoute); // Use the product routes
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