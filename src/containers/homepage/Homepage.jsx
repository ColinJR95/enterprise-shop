import React from 'react'
import './Homepage.scss'
import MenuItem from '../../components/menu-item/MenuItem'

const Homepage = () => {
    return (
        <div className="homepage" >
			<div className="directory-menu">
					<div className="menu-item">
					<div className="content">
						<h1 className="title"> SHOES </h1>
						<span className="subtitle"> SHOP NOW </span>
					</div>			
				</div>

				<MenuItem />

					<div className="menu-item">
					<div className="content">
						<h1 className="title"> CLOTHES </h1>
						<span className="subtitle"> SHOP NOW </span>
					</div>					
				</div>

					<div className="menu-item">
					<div className="content">
						<h1 className="title"> WOMEN </h1>
						<span className="subtitle"> SHOP NOW </span>
					</div>					
				</div>
				
					<div className="menu-item">
					<div className="content">
						<h1 className="title"> MEN </h1>
						<span className="subtitle"> SHOP NOW </span>
					</div>
					
				</div>
				
				

			</div>
		</div>
    )
}

export default Homepage