import React from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/Collection-preview/collection-preview.component'
import styles from './shop.module.scss'
class ShopPage extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			collections: SHOP_DATA,

		}

	}

	render() {
		const { collections } = this.state
		return (
			<div className={styles.shoPpage}>
				{
					collections.map(({ id, ...props }) => (
						<CollectionPreview key={id} {...props} />
					))
				}
			</div>
		)
	}
}

export default ShopPage