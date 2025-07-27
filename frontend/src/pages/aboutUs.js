import React from 'react';

const AboutUs = () => {
	const leaders = [
		{ name: 'Peyush Bansal' },
		{ name: 'Amit Chaudhary' },
		{ name: 'Peyush Bansal' },
		{ name: 'Amit Chaudhary' }
	];

	return (
		<div className="bg-gray-100 font-['Roboto']">
			{/* Our Story Section */}
			<section className="py-16 bg-white">
				<div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
					<div className="md:w-1/2">
						<img
							src="/images/aimg.jpg"
							alt="Our Company Vision"
							className="w-full h-auto rounded-xl shadow-lg object-cover"
						/>
					</div>
					<div className="md:w-1/2 text-justify">
						<h2 className="text-3xl font-bold text-[#0a3d62] mb-4 font-['Poppins']">Our Story</h2>
						<p className="text-lg text-gray-700 leading-7 ">
							Founded in 2010 by an ex-Microsoft 'techie' with relentless passion, Lenskart is one of the fastest-growing eyewear businesses today.
							Peyush Bansal, along with co-founders Amit Chaudhary and Sumeet Kapahi, started 'VALYOO technologies' to add true value to customers' lives.
						</p>
						<p className="text-lg text-gray-700 leading-7 mt-4 ">
							By eliminating retailers and supplying directly to the consumer from our own high-quality manufacturing, we not only cut costs but also deliver superior quality standards.
							Our in-house robotic lens manufacturing ensures 100% precision and top-quality control.
						</p>
					</div>
				</div>
			</section>

			{/* Leaders Section */}
			<section className="py-16 bg-gray-100">
				<div className="container mx-auto px-4">
					<h1 className="text-center text-4xl font-bold text-[#0a3d62] mb-10 font-['Poppins']">Meet Our Leaders</h1>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
						{leaders.map((leader, index) => (
							<div key={index} className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-2 text-center">
								<h3 className="text-xl font-semibold">{leader.name}</h3>
							</div>
						))}
					</div>
				</div>
			</section>
		</div>
	);
};

export default AboutUs;
