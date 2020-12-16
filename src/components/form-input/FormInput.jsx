import React from 'react';

const FormInput = ({handleChange, ...otherProps}) => {
	<div className='group'> 
		<input className='form-input' onChange={handleChange} {...otherProps} />
		{label ? (
			<label className={`${
				otherProp.value.length ? 'shrink' : ''
			} form-input-label`} >
				{label}
			</label>
			): null}
	</div>

}