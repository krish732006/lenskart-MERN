import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
	const isLoggedIn = sessionStorage.getItem('user');

	// const handleLogout = () => {
	// 	sessionStorage.removeItem('user');
	// 	window.location.href = '/login';
	// };

	return (
		<nav className="fixed w-full bg-white shadow-md">
			<div className="container mx-auto px-4 py-4 flex items-center justify-between text-2xl text-500">
				<Link className="font-bold text-gray-800 flex items-center space-x-4" to="/">
					<img src="/images/logo.jpg" alt="Logo" className="h-12 w-12 object-contain rounded-full" />
					<span>Vision Store</span>
				</Link>
				<ul className="flex space-x-8 items-center">
					<li><Link className="text-gray-700 hover:text-blue-600" to="/">Home</Link></li>
					<li><Link className="text-gray-700 hover:text-blue-600" to="/at-store">Home Eye-Test</Link></li>
					<li><Link className="text-gray-700 hover:text-blue-600" to="/aboutUs">About Us</Link></li>
					<li><Link className="text-gray-700 hover:text-blue-600" to="/contactUs">Contact Us</Link></li>
					<li>
						{isLoggedIn ? (
							<span
								className="text-red-600 cursor-pointer hover:underline"
							// onClick={handleLogout}
							>
								Logout
							</span>
						) : (
							<Link className="text-green-600 hover:underline" to="/login">Login</Link>
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
