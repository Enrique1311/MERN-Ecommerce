import express from 'express';
import data from './data.js';

const app = express();

//test
app.get('/api/products', (req, res) => {
	res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
	const product = data.products.find((x) => x.slug === req.params.slug);
	if (product) {
		res.send(product);
	} else {
		res.status(404).send({ message: 'Producto no encontrado...' });
	}
});

app.get('/api/products/slug/:slug', (req, res) => {
	const product = data.products.find((x) => x._id === req.params._id);
	if (product) {
		res.send(product);
	} else {
		res.status(404).send({ message: 'Producto no encontrado...' });
	}
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Listening http://localhost:${PORT}`);
});
