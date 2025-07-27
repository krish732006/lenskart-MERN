import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: '',
		address: '',
		phonenumber: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [error, setError] = useState('');

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const validate = () => {
		const nameRegex = /^[a-zA-Z ]*$/;
		const phoneRegex = /^\d{10}$/;

		if (!nameRegex.test(formData.username)) return 'Invalid username format.';
		if (!phoneRegex.test(formData.phonenumber)) return 'Phone must be 10 digits.';
		if (formData.password !== formData.confirmPassword) return 'Passwords do not match.';
		return '';
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const validationError = validate();
		if (validationError) {
			setError(validationError);
			return;
		}

		try {
			const res = await fetch('http://localhost:5000/api/users/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			if (res.ok) {
				alert('Registered Successfully!');
				navigate('/login');
			} else {
				const data = await res.json();
				setError(data.message || 'Registration failed');
			}
		} catch (err) {
			setError('Server error. Try again later.');
		}
	};

	return (
		<div
			className="min-h-screen flex items-center justify-center bg-cover bg-center p-4"
			style={{ backgroundImage: `url('/images/regbackgroung.jpg')` }}
		>
			<div className="bg-white bg-opacity-90 shadow-xl rounded-xl p-8 w-full max-w-3xl">
				<h1 className="text-3xl font-bold text-center text-blue-900 mb-6 font-serif">Registration Form</h1>

				{error && <p className="text-red-600 text-center mb-4">{error}</p>}

				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label className="block font-medium mb-1">Username</label>
						<input
							type="text"
							name="username"
							onChange={handleChange}
							className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
							required
						/>
					</div>

					<div>
						<label className="block font-medium mb-1">Address</label>
						<textarea
							name="address"
							onChange={handleChange}
							className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
							required
						/>
					</div>

					<div className="md:flex gap-4">
						<div className="md:w-1/2">
							<label className="block font-medium mb-1">Phone Number</label>
							<input
								type="text"
								name="phonenumber"
								onChange={handleChange}
								className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
								required
							/>
						</div>
						<div className="md:w-1/2">
							<label className="block font-medium mb-1">Email</label>
							<input
								type="email"
								name="email"
								onChange={handleChange}
								className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
								required
							/>
						</div>
					</div>

					<div className="md:flex gap-4">
						<div className="md:w-1/2">
							<label className="block font-medium mb-1">Password</label>
							<input
								type="password"
								name="password"
								onChange={handleChange}
								className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
								required
							/>
						</div>
						<div className="md:w-1/2">
							<label className="block font-medium mb-1">Confirm Password</label>
							<input
								type="password"
								name="confirmPassword"
								onChange={handleChange}
								className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:ring-blue-300"
								required
							/>
						</div>
					</div>

					<button
						type="submit"
						className="w-full bg-blue-900 text-white py-2 rounded font-bold text-lg hover:bg-blue-800 transition"
					>
						Register
					</button>

					<p className="text-center mt-4 text-blue-900">
						Already have an account?{' '}
						<a href="/login" className="underline font-medium">
							Signin
						</a>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Register;
