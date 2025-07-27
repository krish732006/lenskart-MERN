import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ product }) {
	const navigate = useNavigate();

	const handleBuy = async () => {
		// Retrieve cart from localStorage or initialize empty array
		const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

		// Add product to local cart
		const updatedCart = [...existingCart, {
			pid: product._id,
			pname: product.name,
			size: product.size,
			price: product.price,
			gst: product.gst,
			type: product.type,
			image: product.image,
		}];

		// Store updated cart
		localStorage.setItem('cart', JSON.stringify(updatedCart));

		// Go to cart page
		navigate('/cart');
	};

	return (
		<div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
			<div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition">
				<img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
				<div className="p-4">
					<h5 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h5>
					<p className="text-sm text-gray-600 mb-2">Size: {product.size}</p>
					<p className="text-green-600 font-bold">Rs. {product.price}</p>
					<p className="text-xs text-gray-500 mb-2">(Incl. GST)</p>
					<p className="text-sm text-gray-700 mb-2">{product.description}</p>
					<button
						className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md"
						onClick={handleBuy}
					>
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductCard;
