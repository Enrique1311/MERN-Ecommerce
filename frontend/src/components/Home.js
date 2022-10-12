import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../components/utils/MyButton/MyButton';
import data from '../../../backend/data';

const Home = () => {
	return (
		<div>
			{' '}
			<h1>Productos Destacados</h1>
			<div className='products'>
				{data.products.map((product) => (
					<div
						className='product'
						key={product.slug}
					>
						<Link to={`/product/${product.slug}`}>
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
							<p className='product-price'>$ {product.price}</p>
							<MyButton>Agregar al carrito</MyButton>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
