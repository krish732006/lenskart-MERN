const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
	username: { type: String, required: true },
	address: { type: String, required: true },
	phonenumber: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true }
});

// Hash password before save
userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	this.password = await bcrypt.hash(this.password, 12);
	next();
});

module.exports = mongoose.model('User', userSchema);

