const Cart = require('../model/cartModel');

// Add to cart
exports.addToCart = async (req, res) => {
	try {
		const { rid, pid, pname, size, price, gst, type, image } = req.body;

		// Check if item already exists
		const exists = await Cart.findOne({ rid, pid });
		if (exists) return res.status(409).json({ message: 'Product already in cart' });

		const newItem = new Cart({ rid, pid, pname, size, price, gst, type, image });
		await newItem.save();
		res.status(201).json({ message: 'Added to cart', cartItem: newItem });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Get all items in user's cart
exports.getCartItems = async (req, res) => {
	try {
		const cartItems = await Cart.find({ rid: req.params.rid });
		res.json(cartItems);
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Delete a single item
exports.deleteCartItem = async (req, res) => {
	try {
		await Cart.findByIdAndDelete(req.params.id);
		res.json({ message: 'Item removed' });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};

// Clear entire cart for a user
exports.clearCart = async (req, res) => {
	try {
		await Cart.deleteMany({ rid: req.params.rid });
		res.json({ message: 'Cart cleared' });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
