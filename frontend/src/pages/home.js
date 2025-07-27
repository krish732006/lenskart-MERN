import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/api';
import ProductCard from '../components/productCard';
import axios from 'axios';

function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const res = await axios.get('http://localhost:5000/api/products');
				setProducts(res.data);
			} catch (err) {
				console.error('Error fetching products:', err);
			}
		};

		fetchProducts();
	}, []);

	return (
		<div className="container mx-auto px-4 py-6">
			<h2 className="text-2xl font-bold text-center mb-6">Eyeglasses & Sunglasses Collection</h2>
			<div className="flex -m-2 gap-4">
				{products.map(product => (
					<ProductCard key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}

export default Home;
