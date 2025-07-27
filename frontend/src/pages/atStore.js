import React from 'react';

const AtStore = () => {
	return (
		<>
			<div className="max-w-[1250px] mx-auto px-5 text-center">
				<h1 className="text-center font-[Poppins] mt-10 text-2xl md:text-5xl font-semibold mb-10">
					Free Progressive Lens
				</h1>
				<a href="/login">
					<img
						src="/images/limg1.jpg"
						alt="Promotional banner for progressive lens"
						className="w-full max-w-full h-auto rounded-[25px] mb-4"
					/>
				</a>

				<h1 className="text-center font-[Poppins] mt-10 text-2xl md:text-5xl font-semibold mb-10">
					Book Eye Test At Home
				</h1>
				<img
					src="/images/limg2.jpg"
					alt="Promotional banner for home eye test"
					className="w-full max-w-full h-auto rounded-[25px] mb-4"
				/>

				<h1 className="text-center font-[Poppins] mt-10 text-2xl md:text-5xl font-semibold mb-10">
					Premium Eyewear
				</h1>
				<img
					src="/images/limg3.jpg"
					alt="Promotional banner for premium eyewear"
					className="w-full max-w-full h-auto rounded-[25px] mb-4"
				/>
			</div>
		</>
	);
};

export default AtStore;
