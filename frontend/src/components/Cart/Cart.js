import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { Store } from '../../Store';
import ErrorMessage from '../utils/ErrorMessage/ErrorMessage';
import MyButton from '../utils/MyButton/MyButton';

const Cart = () => {
	const navigate = useNavigate();
	const { state, dispatch: contextDispatch } = useContext(Store);
	const {
		cart: { cartItems },
	} = state;

	return (
		<div>
			<Helmet>
				<title>Carrito de Compras</title>
			</Helmet>
			<h1>Carrito de Compras</h1>
			<ErrorMessage>
				{cartItems.length === 0 ? (
					<Link to='/'>¡No hay productos en el carrito! Ir a Productos</Link>
				) : (
					<div>
						{cartItems.map((item) => (
							<div key={item._id}>
								<div>
									<img
										src='item.image'
										alt='item.name'
										className='item-image'
									/>{' '}
									<Link to={`/product/${item.slug}`}>{item.name}</Link>
									<MyButton onClick={item.quantity === 1}>
										<i></i>
									</MyButton>
									<span>{item.quantity}</span>{' '}
									<MyButton disabled={item.quantity === item.stock}>
										<i></i>
									</MyButton>
								</div>
								<div>${item.price}</div>
								<MyButton>
									<i></i>
								</MyButton>
							</div>
						))}
					</div>
				)}
			</ErrorMessage>
		</div>
	);
};

export default Cart;
