import React from 'react';
import './GlobalButton.scss';

const GlobalButton = ({children, ...otherprops}) => (

			<button className='global_button' {...otherprops} >
				{children}
			</button>
	);

export default GlobalButton;