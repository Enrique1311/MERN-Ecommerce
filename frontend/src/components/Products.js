import React from 'react';
import { useParams } from 'react-router-dom';

const Products = () => {
	const params = useParams();
	const { slug } = params;

	return (
		<div>
			<h1>{slug}</h1>
		</div>
	);
};

export default Products;
