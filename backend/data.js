import samsungS21 from './images/galaxy-s21.png';
import motoEdgePlus from './images/moto-edge-plus.png';
import thinkbookYoga from './images/thinkbook-yoga.png';
import asusVivibook from './images/asus-vivobook.png';

const data = {
	products: [
		{
			name: 'Celular Samsung S21',
			slug: 'celular-samsung-s21',
			category: 'Celular',
			image: samsungS21,
			price: 228000,
			stock: 20,
			brand: 'Samsung',
			rating: 4.7,
			reviews: 15,
			description: '12GB RAM - Memoria 128GB - etc',
		},
		{
			name: 'Celular Motorola Moto Edge Plus',
			slug: 'celular-moto-edge-plus',
			category: 'Celular',
			image: motoEdgePlus,
			price: 198000,
			stock: 12,
			brand: 'Motorola',
			rating: 4.5,
			reviews: 14,
			description: '12GB RAM - Memoria 128GB - etc',
		},
		{
			name: 'Notebook Lenovo ThinkBook 14s Yoga 2da Gen',
			slug: 'notebook-thinkbook-yoga',
			category: 'Notebook',
			image: thinkbookYoga,
			price: 314000,
			stock: 6,
			brand: 'Lenovo',
			rating: 4.3,
			reviews: 10,
			description:
				'14" - Intel Core i7 12da gen - 16 GB de Ram - SSD de 512 GB - Win 11 Pro',
		},
		{
			name: 'Notebook Asus Vivobook',
			slug: 'notebook-asus-vivobook',
			category: 'Notebook',
			image: asusVivibook,
			price: 344000,
			stock: 8,
			brand: 'Asus',
			rating: 4.4,
			reviews: 11,
			description:
				'15.6" - Intel Core i7 11va gen - 16 GB de Ram - SSD de 512 GB - Win 11 Home',
		},
	],
};

export default data;
