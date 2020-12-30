import React from 'react';
import './SignIn.scss';
import FormInput from '../form-input/FormInput';
import GlobalButton from '../global-button/GlobalButton';
import { signInWithGoogle } from '../../firebase/firebase.utils';
 
class SignIn extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''

		}
	}


handleSubmit = event => {
	event.preventDefault();

	this.setState({email: '', password: ''}) 
}

handleChange = event => {
	const{value, name} = event.target

	this.setState({[name]: value})
};

	render() {
		return (
			
			<div className='sign_in'>
				<h2>I already have an account </h2>
				<span>Sign in with your email and password</span>
			
			<form onSubmit={this.handleSubmit}>
				<FormInput
				 name="email"
				 type="email"
				 value={this.state.email}
				 handleChange={this.handleChange}
				 label="email"
				 required
				 />
				<FormInput
				name="password" 
				type="password" 
				value={this.state.password} 
				handleChange={this.handleChange}
				label="password"
				required 
				/>

				<div className='buttons'>

				<GlobalButton type='submit'> Sign in </GlobalButton>

				<GlobalButton type='submit' onClick={signInWithGoogle} isGoogleSignIn >with google</GlobalButton>
		
				</div>

			</form>
			</div>
			)
	}
}
export default SignIn;