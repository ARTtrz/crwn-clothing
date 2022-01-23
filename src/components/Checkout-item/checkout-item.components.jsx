import React from 'react';

import styles from './checkout-item.module.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
	return (
		<div className={styles.checkoutItem}>
			<div className={styles.imageContainer}>
				<img src={imageUrl} alt="item" />
			</div>
			<span className={styles.name}>{name}</span>
			<span className={styles.quantity}>{quantity}</span>
			<span className={styles.price}>{price}</span>
			<div classNAme={styles.removeButton}>&#10005;</div>
		</div>
	)
}

export default CheckoutItem