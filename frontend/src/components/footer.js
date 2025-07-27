// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// function Footer() {
// 	const navigate = useNavigate();

// 	return (
// 		<footer className="bg-gray-900 text-white py-8 mt-10">
// 			<div className="container mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
// 				<div>
// 					<h5 className="text-lg font-semibold mb-2">Our Service</h5>
// 					<p className="text-sm text-gray-300">Our brand provides free eye check-up at store and home.</p>
// 				</div>
// 				<div className='cursor-pointer'>
// 					<h5 className="text-lg font-semibold mb-2">Quick Links</h5>
// 					<p className="text-sm text-gray-300 mb-1" onClick={() => { navigate("/") }}>All</p>
// 					<p className="text-sm text-gray-300 mb-1">Home Eye-Test</p>
// 					<p className="text-sm text-gray-300 mb-1">About Us</p>
// 					<p className="text-sm text-gray-300 mb-1">Contact Us</p>
// 				</div>
// 				<div>
// 					<h5 className="text-lg font-semibold mb-2">Have a Question?</h5>
// 					<p className="text-sm text-gray-300">📍 203 Fake St. Mountain View, San Francisco, CA</p>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }

// export default Footer;


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

function Footer() {
	const navigate = useNavigate();

	return (
		<footer className="w-full bg-gradient-to-r from-[#0f3c57] to-[#2f5b7c] text-white py-12 mt-10">
			<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center ">
				{/* Our Service */}
				<div>
					<h5 className="text-xl font-semibold mb-2 relative inline-block after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-400 after:mt-1 after:mx-auto md:after:ml-0">
						Our Service
					</h5>
					<p className="text-md text-gray-300 mt-4">
						We offer complimentary eye check-ups in-store and at home.
						<br />
						Our brand guarantees quality lenses and stylish frames, complete with a warranty and replacement policy.
					</p>
				</div>

				{/* Quick Links */}
				<div>
					<h5 className="text-xl font-semibold mb-2 relative inline-block after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-400 after:mt-1 after:mx-auto md:after:ml-0">
						Quick Links
					</h5>
					<div className="text-md text-gray-300 mt-4 space-y-2 cursor-pointer">
						<p onClick={() => { navigate("/") }}>Home</p>
						<p onClick={() => { navigate("/at-store") }}>Home Eye-Test</p>
						<p onClick={() => { navigate("/aboutUs") }}>About Us</p>
						<p onClick={() => { navigate("/contactUs") }}>Contact Us</p>
					</div>
				</div>

				{/* Contact Info */}
				<div>
					<h5 className="text-xl font-semibold mb-2 relative inline-block after:content-[''] after:block after:w-10 after:h-[2px] after:bg-yellow-400 after:mt-1 after:mx-auto md:after:ml-0">
						Have a Question?
					</h5>
					<div className="text-md text-gray-300 mt-4 flex flex-col items-center md:items-start gap-2">
						<p className="flex items-start gap-2">
							<FaMapMarkerAlt className="text-yellow-400 mt-1" />
							<span>203 Fake St. Mountain View, San Francisco, CA</span>
						</p>
						<p className="flex items-center gap-2">
							<FaPhone className="text-yellow-400" />
							<span>+1 234 567 890</span>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
