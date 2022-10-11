import MyButton from './components/utils/MyButton/MyButton';
import data from './data';

function App() {
	return (
		<div className='App'>
			<header>
				<a href='/'>Ecommerce</a>
			</header>
			<main>
				<h1>Productos Destacados</h1>
				<div className='products'>
					{data.products.map((product) => (
						<div
							className='product'
							key={product.slug}
						>
							<a href={`/product/${product.slug}`}>
								<img
									src={product.image}
									alt={product.name}
								/>
							</a>
							<div className='product-description'>
								<a
									href={`/product/${product.slug}`}
									className='product-name'
								>
									<p>{product.name}</p>
								</a>
								<p className='product-price'>$ {product.price}</p>
								<MyButton>Agregar al carrito</MyButton>
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default App;
