import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/hanger.svg'
import './Header.scss'
import {auth} from '../../firebase/firebase.utils'

const Header = ({currentUser}) => {
	return (
		<div className='header' >
			<Link to ='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option'>
					SHOP
				</Link>			
				<Link className='option'>
					CONTACT
				</Link>
				{
					currentUser ? 
					<div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>
					:
					<Link className='option' to='/signin'>SIGN IN </Link>
				}
			</div>
		</div>
	)
}

export default Header