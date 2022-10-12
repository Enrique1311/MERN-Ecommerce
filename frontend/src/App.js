import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';

function App() {
	return (
		<BrowserRouter>
			<div className='App'>
				<header>
					<Link to='/'>Ecommerce</Link>
				</header>
				<main>
					<Routes>
						<Route
							path='/product/:slug'
							element={<Products />}
						/>
						<Route
							path='/'
							element={<Home />}
						/>
					</Routes>
				</main>
			</div>
		</BrowserRouter>
	);
}

export default App;
