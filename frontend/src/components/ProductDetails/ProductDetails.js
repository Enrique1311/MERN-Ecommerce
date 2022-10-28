import axios from 'axios';
import React, { useContext, useEffect, useReducer } from 'react';
import './ProductDetails.css';
import { useNavigate, useParams } from 'react-router-dom';
import logger from 'use-reducer-logger';
import Rating from '../Rating/Rating';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../utils/LoadingBox/LoadingBox';
import ErrorMessage from '../utils/ErrorMessage/ErrorMessage';
import { getError } from '../utils/LoadingBox/getError';
import { Store } from '../../Store';
import MyButton from '../utils/MyButton/MyButton';

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_REQUEST':
			return { ...state, loading: true };
		case 'FETCH_SUCCESS':
			return { ...state, product: action.payload, loading: false };
		case 'FETCH_FAIL':
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

const ProductDetails = () => {
	const params = useParams();
	const { slug } = params;

	const [{ loading, error, product }, dispatch] = useReducer(logger(reducer), {
		products: [],
		loading: true,
		error: '',
	});

	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'FETCH_REQUEST' });
			try {
				const result = await axios.get(`/api/products/slug/${slug}`);
				dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
			} catch (error) {
				dispatch({ type: 'FETCH_FAIL', payload: getError(error) });
			}
		};
		fetchData();
	}, [slug]);

	const { state, dispatch: contextDispatch } = useContext(Store);

	const { cart } = state;

	const addToCartHandler = async () => {
		const itemExist = cart.cartItems.find((x) => x._id === product._id);
		const quantity = itemExist ? itemExist.quantity + 1 : 1;
		const { data } = await axios.get(`/api/products/${product._id}`);

		if (data.stock < quantity) {
			window.alert('Disculpe, producto sin stock');
			return;
		}

		contextDispatch({
			type: 'CART_ADD_ITEM',
			payload: { ...product, quantity },
		});
	};

	return loading ? (
		<LoadingBox />
	) : error ? (
		<ErrorMessage>{error}</ErrorMessage>
	) : (
		<div className='product-details'>
			<img
				className='product-details-image'
				src={product.image}
				alt={product.name}
			/>
			<div className='product-details-info-price'>
				<Helmet>
					<title>{product.name}</title>
				</Helmet>
				<h2>{product.name}</h2>
				<Rating
					rating={product.rating}
					reviews={product.reviews}
				/>
				<p>{product.description}</p>
				<h4 className='product-details-price'>Precio: ${product.price}</h4>
				<h5 className={product.stock > 0 ? 'in-stock' : 'disabled'}>
					{product.stock > 0 ? 'En Stock' : 'No Disponible'}
				</h5>
				{product.stock > 0 && (
					<MyButton onClick={addToCartHandler}>Agregar al carrito</MyButton>
				)}
			</div>
		</div>
	);
};

export default ProductDetails;
