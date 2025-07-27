const express = require('express');
const router = express.Router();
const {
	getAllProducts,
	createProduct,
	deleteProduct,
	updateProduct
} = require('../controller/productController');

router.get('/', getAllProducts);
router.post('/createProduct', createProduct);
router.delete('/:id', deleteProduct);
router.put('/:id', updateProduct);

module.exports = router;