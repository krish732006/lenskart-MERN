const Product = require('../model/productModel');

exports.getAllProducts = async (req, res) => {
	try {
		const products = await Product.find();
		res.json(products);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.createProduct = async (req, res) => {
	try {
		const newProduct = new Product(req.body);
		const savedProduct = await newProduct.save();
		res.status(201).json(savedProduct);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};

exports.deleteProduct = async (req, res) => {
	try {
		await Product.findByIdAndDelete(req.params.id);
		res.json({ message: 'Product deleted' });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

exports.updateProduct = async (req, res) => {
	try {
		const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
		res.json(updatedProduct);
	} catch (error) {
		res.status(400).json({ message: error.message });
	}
};