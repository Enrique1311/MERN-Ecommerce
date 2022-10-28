import { useContext } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import ProductDetails from './components/ProductDetails/ProductDetails';

function App() {
	return (
		<BrowserRouter>
			<div className='app-container'>
				<header>
					<Link to='/'>My Ecommerce</Link>
					<NavBar />
				</header>
				<main>
					<Routes>
						<Route
							path='/product/:slug'
							element={<ProductDetails />}
						/>
						<Route
							path='/cart'
							element={<Cart />}
						/>
						<Route
							path='/'
							element={<Home />}
						/>
					</Routes>
				</main>
				<footer>
					<p>Todos los derechos reservados</p>
				</footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
