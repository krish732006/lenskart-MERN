// backend/app.js

const express = require('express');
const cors = require('cors');

const productRoutes = require('./route/productRoute');
const userRoutes = require('./route/userRoute')
const cartRoutes = require('./route/cartRoute')

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/cart', cartRoutes);

// Health Check Route
app.get('/', (req, res) => {
	res.send('🟢 API is running...');
});

module.exports = app;
