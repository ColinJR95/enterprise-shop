import React from 'react'
import SHOP_DATA from './Shop.data.js'
import CollectionPreview from '../../components/collection-preview/CollectionPreview'

export default class ShopPage extends React.Component {
	constructor(props) {
		super();

		this.state = { 
			collections: SHOP_DATA
		};
	}
	render() {
		const {collections} = this.state;
		return (
			<div className='shop-page'>
			{
				collections.map(({id, ...othershit}) => (
				<CollectionPreview key={id} {...othershit}/>
				))
			}
				</div>)
	}
}