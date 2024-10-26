import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import productRoutes from './src/routes/productRoutes.js';

dotenv.config(); // Load environment variables

const app = express(); // Initialize Express
const PORT = process.env.PORT || 3000; // Define the server port

// MongoDB connection URI
const mongoURI = process.env.MONGODB_URI ?? 'mongodb://localhost:27017/ecommerce-db';

// Connect to MongoDB
mongoose.connect(mongoURI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Middleware to parse JSON

// Register the product routes
app.use('/api', productRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
