import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from '../../Store';
import './NavBar.css';
import { FaShoppingCart } from 'react-icons/fa';

const NavBar = () => {
	const { state } = useContext(Store);
	const { cart } = state;

	return (
		<Link
			to='/cart'
			className='nav-link'
		>
			<div className='cart-icon'>
				<FaShoppingCart />
				{cart.cartItems.lenght > 0 && (
					<div className='cart-bubble'>
						{cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
					</div>
				)}
			</div>
			{}
		</Link>
	);
};

export default NavBar;
