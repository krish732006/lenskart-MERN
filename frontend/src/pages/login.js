import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	// const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');

		try {
			const res = await axios.post('http://localhost:5000/api/users/login', {
				email,
				password,
			});

			if (res.data.success) {
				// You can also save user info in localStorage if needed
				// localStorage.setItem('user', JSON.stringify(res.data.user));

				sessionStorage.setItem('user', JSON.stringify(res.data.user));

				// const buyNowProduct = sessionStorage.getItem('buyNowProduct');
				// if (buyNowProduct) {
				// 	const product = JSON.parse(buyNowProduct);

				// 	// Call cart API to add product
				// 	await axios.post('http://localhost:5000/api/cart/add', {
				// 		rid: res.data.user._id,
				// 		pid: product._id,
				// 		pname: product.name,
				// 		size: product.size,
				// 		price: product.price,
				// 		gst: product.gst,
				// 		type: product.type,
				// 		image: product.image,
				// 	});

				// 	sessionStorage.removeItem('buyNowProduct');
				// 	navigate('/cart');
				// } else {
				// 	navigate('/'); // or your homepage
				// }
			} else {
				setError('Incorrect Email or Password');
			}
		} catch (err) {
			console.error(err);
			setError(err.message);
		}
	};

	return (
		<div
			className="min-h-screen flex items-center justify-center bg-cover bg-center"
			style={{ backgroundImage: "url('/images/regbackgroung.jpg')" }}
		>
			<div className="bg-white bg-opacity-90 shadow-xl rounded-2xl p-8 w-full max-w-md">
				<h1 className="text-3xl font-bold text-center text-blue-900 mb-6">Login Form</h1>

				{error && (
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4 text-center">
						{error}
					</div>
				)}

				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email</label>
						<input
							type="email"
							id="email"
							name="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
							placeholder="Enter your email"
						/>
					</div>
					<div className="mb-6">
						<label htmlFor="password" className="block text-sm font-semibold text-gray-700">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-900"
							placeholder="Enter your password"
						/>
					</div>
					<button
						type="submit"
						className="w-full py-2 px-4 bg-blue-900 text-white font-bold rounded hover:bg-blue-800 transition duration-300"
					>
						Login
					</button>
				</form>

				<p className="text-center text-blue-900 text-sm mt-4">
					Don't have an account? <a href="/registration" className="underline font-semibold">Signup</a>
				</p>
			</div>
		</div>
	);
}

export default Login;
