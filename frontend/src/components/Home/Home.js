import React, { useEffect, useReducer } from 'react';
import axios from 'axios';
import './Home.css';
import logger from 'use-reducer-logger';
import Product from '../Product/Product';
import { Helmet } from 'react-helmet-async';
import LoadingBox from '../utils/LoadingBox/LoadingBox';
import ErrorMessage from '../utils/ErrorMessage/ErrorMessage';

const reducer = (state, action) => {
	switch (action.type) {
		case 'FETCH_REQUEST':
			return { ...state, loading: true };
		case 'FETCH_SUCCESS':
			return { ...state, products: action.payload, loading: false };
		case 'FETCH_FAIL':
			return { ...state, loading: false, error: action.payload };
		default:
			return state;
	}
};

const Home = () => {
	const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
		products: [],
		loading: true,
		error: '',
	});
	//const [products, setProducts] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			dispatch({ type: 'FETCH_REQUEST' });
			try {
				const result = await axios.get('/api/products');
				dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
			} catch (error) {
				dispatch({ type: 'FETCH_FAIL', payload: error.message });
			}
		};
		fetchData();
	}, []);

	return (
		<div>
			<Helmet>
				<title>My Ecommerce</title>
			</Helmet>
			<h1>Productos Destacados</h1>
			<div className='products'>
				{loading ? (
					<LoadingBox />
				) : error ? (
					<ErrorMessage>{error}</ErrorMessage>
				) : (
					products.map((product) => <Product product={product} />)
				)}
			</div>
		</div>
	);
};

export default Home;
