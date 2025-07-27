const User = require('../model/userModel');
const bcrypt = require('bcryptjs');

// Register
exports.registerUser = async (req, res) => {
	const { username, address, phonenumber, email, password, confirmPassword } = req.body;

	if (password !== confirmPassword) {
		return res.status(400).json({ message: 'Passwords do not match' });
	}

	try {
		const existingUser = await User.findOne({ email });
		if (existingUser) return res.status(400).json({ message: 'Email already in use' });

		const newUser = await User.create({ username, address, phonenumber, email, password });
		res.status(201).json({ message: 'User registered successfully', user: newUser });
	} catch (error) {
		res.status(500).json({ message: 'Error registering user', error });
	}
};

// Login
exports.loginUser = async (req, res) => {
	const { email, password } = req.body;

	try {
		// Check if email exists
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ success: false, error: 'Email not registered' });
		}

		// Compare password
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(401).json({ success: false, error: 'Incorrect password' });
		}

		// Login success
		return res.status(200).json({
			success: true,
			message: 'Login successful',
			buy: 'buy', // Optional: send based on user data
			user: {
				id: user._id,
				email: user.email,
			}
		});
	} catch (err) {
		console.error('Login Error:', err);
		res.status(500).json({ success: false, error: 'Server error. Please try again later.' });
	}
};
