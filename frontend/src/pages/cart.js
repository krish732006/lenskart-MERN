import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { FaTrashAlt } from 'react-icons/fa';

function Cart() {
	const [cartItems, setCartItems] = useState([]);

	useEffect(() => {
		const fetchCartItems = async () => {
			// const user = JSON.parse(sessionStorage.getItem('user'));

			// if (user) {
			// 	try {
			// 		const res = await axios.get(`http://localhost:5000/api/cart/${user._id}`);
			// 		setCartItems(res.data);
			// 	} catch (err) {
			// 		console.error('Error fetching cart from server:', err);
			// 	}
			// } else {
			const localCart = JSON.parse(localStorage.getItem('cart')) || [];
			setCartItems(localCart);
			// }
		};

		fetchCartItems();
	}, []);

	const handleRemove = (indexToRemove) => {
		const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
		setCartItems(updatedCart);
		localStorage.setItem('cart', JSON.stringify(updatedCart));
	};

	// const calculateTotal = (item) => {
	// 	const total = item.price + (item.gst || 0);
	// 	return total.toFixed(2);
	// };

	const totalAmount = cartItems.reduce(
		(sum, item) => sum + item.price + (item.gst || 0),
		0
	);

	return (
		<div className="bg-gray-100 min-h-screen py-8 px-4">
			<div className="max-w-7xl mx-auto">
				<h2 className="text-3xl font-bold mb-6">🛒 Your Cart</h2>

				{cartItems.length === 0 ? (
					<p className="text-gray-600">Your cart is empty.</p>
				) : (
					<div className="grid grid-col-2 gap-6">
						{cartItems.map((item, index) => (
							<div
								key={item._id || index}
								className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition duration-300"
							>
								<img
									src={item.image}
									alt={item.pname}
									className="w-full md:w-44 h-44 object-cover rounded-2xl mb-4 md:mb-0 md:mr-6"
								/>
								<div className="flex-1 w-full ">
									<h3 className="text-2xl font-semibold mb-2">{item.pname}</h3>
									<p className="text-xl text-gray-600 mb-2">Size: {item.size}</p>
									<p className="text-xl text-green-600 font-semibold mt-1 mb-2">
										₹{item.price}{' '}
										<span className="text-gray-500 text-sm">(Incl. GST)</span>
									</p>
									<button
										className="flex gap-2 text-red-600 hover:underline text-md"
										onClick={() => handleRemove(index)}
									>
										<FaTrashAlt className='mt-1'></FaTrashAlt><span >Remove</span>
									</button>
								</div>
							</div>
						))}
					</div>
				)}

				{/* Total & Checkout */}
				{cartItems.length > 0 && (
					<div className="max-w-md mt-10 bg-white rounded-2xl shadow-lg p-6">
						<h4 className="text-xl font-semibold mb-2">💳 Bill Details</h4>
						<p className="text-2xl font-bold text-green-700 mb-4">₹{totalAmount.toFixed(2)}</p>
						<button className="w-full bg-green-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-green-700 transition">
							Proceed to Pay
						</button>
					</div>
				)}
			</div>
		</div>
	);
}

export default Cart;
