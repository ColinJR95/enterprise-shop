import React from 'react'
import {Link} from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/hanger.svg'
import './Header.scss'

const Header = () => {
	return (
		<div className='header' >
			<Link to ='/' className='logo-container'>
				<Logo className='logo' />
			</Link>
			<div className='options'>
				<Link className='option'>
					SHOP
				</Link>
			<div className='options'>
				<Link className='option'>
					CONTACT
				</Link>
			</div>

			</div>
			<div>
				
			</div>
		</div>
	)
}

export default Header