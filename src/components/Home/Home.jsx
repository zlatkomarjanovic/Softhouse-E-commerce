import React from 'react';
import { Banner } from '..';
import Brand from '../Brand/Brand';
import Products from '../Products/Products';
const Home = ({ products, onAddToCart }) => {
	return (
		<div>
			<Banner />
			<Brand />
			<Products products={products} onAddToCart={onAddToCart} />
		</div>
	);
};

export default Home;
