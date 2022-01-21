import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

import CustomButton from '../Custom-button/custom-button.component';

import styles from './collection-item.module.scss';

const CollectionItem = ({ item, addItem }) => {
	const { name, price, imageUrl } = item;
	return (
		<div className={styles.collectionItem}>
			<div
				className={styles.image}
				style={{
					backgroundImage: `url(${imageUrl})`
				}}
			/>


			<div className={styles.collectionFooter}>
				<span className={styles.name}>{name}</span>
				<span className={styles.price}>{price}</span>
			</div>
			<CustomButton onClick={() => addItem(item)} inverted className={styles.customButton}>Add to cart</CustomButton>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);