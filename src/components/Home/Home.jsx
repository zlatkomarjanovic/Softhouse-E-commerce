import React from 'react';
import { Banner } from '..';
import Products from '../Products/Products';
const Home = ({ products, onAddToCart }) => {
	return (
		<div>
			<Banner />
			<Products products={products} onAddToCart={onAddToCart} />
		</div>
	);
};

export default Home;
