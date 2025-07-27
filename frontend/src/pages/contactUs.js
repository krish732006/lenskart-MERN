import React, { useState } from 'react';

const ContactUs = () => {
	const [formData, setFormData] = useState({
		fname: '',
		lname: '',
		email: '',
		pno: '',
		reason: '',
		message: '',
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// TODO: Send data to backend API (e.g., via fetch/axios)
		alert('Message sent successfully!');
	};

	return (
		<div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				{/* Top Section */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
					<div className="bg-white shadow-lg rounded-xl p-8">
						<h3 className="text-2xl font-semibold text-blue-900 mb-6">Contact Information</h3>
						<div className="space-y-6">
							<div className="flex items-start space-x-4">
								<i className="fas fa-envelope text-blue-600 text-xl"></i>
								<div>
									<b className="text-gray-800 block">Email Address</b>
									<span className="text-gray-600">contact@lenskart.ae</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<i className="fas fa-phone-alt text-blue-600 text-xl"></i>
								<div>
									<b className="text-gray-800 block">Contact Number</b>
									<span className="text-gray-600">8000-130-002</span>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<i className="fas fa-map-marker-alt text-blue-600 text-xl"></i>
								<div>
									<b className="text-gray-800 block">Address</b>
									<span className="text-gray-600">
										Lenskart, G04, AR Mall, Mota Varachha, opposite Panvel Point, Surat, Gujarat 394101
									</span>
								</div>
							</div>
						</div>
					</div>
					<div className="rounded-xl overflow-hidden shadow-lg">
						<iframe
							className="w-full h-full min-h-[350px]"
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.167951829623!2d72.87919937510115!3d21.2252119804743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f4465373a9f%3A0x8e925c1059f3df3!2sLenskart.com%20at%20Mota%20Varachha%2C%20Surat!5e0!3m2!1sen!2sin!4v1721643445100!5m2!1sen!2sin"
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Google Map"
						></iframe>
					</div>
				</div>

				{/* Form Section */}
				<div className="bg-white shadow-xl rounded-xl p-8">
					<h2 className="text-3xl font-bold text-center text-blue-900 mb-2">Get In Touch</h2>
					<p className="text-center text-gray-500 mb-8">Have a question? We'd love to hear from you.</p>
					<form onSubmit={handleSubmit} className="space-y-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<input
								type="text"
								name="fname"
								placeholder="First Name"
								className="form-input border rounded-lg p-3 w-full"
								value={formData.fname}
								onChange={handleChange}
								required
							/>
							<input
								type="text"
								name="lname"
								placeholder="Last Name"
								className="form-input border rounded-lg p-3 w-full"
								value={formData.lname}
								onChange={handleChange}
								required
							/>
							<input
								type="email"
								name="email"
								placeholder="Email"
								className="form-input border rounded-lg p-3 w-full"
								value={formData.email}
								onChange={handleChange}
								required
							/>
							<input
								type="text"
								name="pno"
								placeholder="Phone Number"
								className="form-input border rounded-lg p-3 w-full"
								value={formData.pno}
								onChange={handleChange}
								required
							/>
						</div>
						<input
							type="text"
							name="reason"
							placeholder="Reason for Contact (e.g., Order Inquiry)"
							className="form-input border rounded-lg p-3 w-full"
							value={formData.reason}
							onChange={handleChange}
							required
						/>
						<textarea
							name="message"
							rows="5"
							placeholder="Write your message here..."
							className="form-textarea border rounded-lg p-3 w-full"
							value={formData.message}
							onChange={handleChange}
							required
						></textarea>
						<div className="text-center">
							<button
								type="submit"
								className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
							>
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default ContactUs;
