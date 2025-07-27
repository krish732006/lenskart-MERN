const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./model/productModel');
const sampleProducts = require('./data/products');

dotenv.config();

async function seedDB() {
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});

		console.log('✅ Connected to MongoDB');

		await Product.deleteMany(); // Optional: clear old products
		await Product.insertMany(sampleProducts);

		console.log('✅ Dummy products inserted');
		process.exit();
	} catch (err) {
		console.error('❌ Error inserting dummy data:', err.message);
		process.exit(1);
	}
}

seedDB();
