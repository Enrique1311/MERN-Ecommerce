import React from 'react';
import './MyButton.css';

const MyButton = ({ children, onClick }) => {
	return (
		<div>
			<button
				className='my-button'
				onClick={onClick}
			>
				{children}
			</button>
		</div>
	);
};

export default MyButton;
