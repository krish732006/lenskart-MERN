const express = require('express');
const router = express.Router();
const {
	addToCart,
	getCartItems,
	deleteCartItem,
	clearCart
} = require('../controller/cartController');

router.post('/add', addToCart);
router.get('/:rid', getCartItems); // Get cart by user ID
router.delete('/:id', deleteCartItem); // Delete one cart item
router.delete('/clear/:rid', clearCart); // Clear cart for user

module.exports = router;
