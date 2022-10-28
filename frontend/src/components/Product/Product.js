import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';
import Rating from '../Rating/Rating';
import MyButton from '../utils/MyButton/MyButton';

const Product = (props) => {
	const { product } = props;
	return (
		<div
			className='product'
			key={product.slug}
		>
			<Link
				className='product-image'
				to={`/product/${product.slug}`}
			>
				<img
					src={product.image}
					alt={product.name}
				/>
			</Link>
			<div className='product-description'>
				<Link
					to={`/product/${product.slug}`}
					className='product-name'
				>
					<p>{product.name}</p>
				</Link>
				<Rating
					rating={product.rating}
					reviews={product.reviews}
				/>
				<p className='product-price'>$ {product.price}</p>
				<MyButton>Agregar al carrito</MyButton>
			</div>
		</div>
	);
};

export default Product;
