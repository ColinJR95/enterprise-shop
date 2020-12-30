import React from 'react';
import './GlobalButton.scss';

const GlobalButton = ({children, isGoogleSignIn, ...otherprops}) => (

			<button 
			className={`${isGoogleSignIn ? 'google-sign-in' : ''} global_button`} 
			{...otherprops} 
			>
				{children}
			</button>
	);

export default GlobalButton;