import React from 'react';
import './LoadingBox.css';

const LoadingBox = () => {
	return (
		<div className='lds-ring'>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
			<h3>Cargando...</h3>
		</div>
	);
};

export default LoadingBox;
