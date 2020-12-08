import React from 'react'
import SHOP_DATA from './Shop.data.js'

export default class ShopPage extends React.Component {
	constructor(props) {
		super();

		this.state = { 
			collections: SHOP_DATA
		};
	}
	render() {
		return (
			<div>
				nothing here to see yet
			</div>
		)
	}
}