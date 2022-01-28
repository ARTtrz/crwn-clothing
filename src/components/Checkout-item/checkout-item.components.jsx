import React from 'react';
import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux/cart/cart.actions';
import styles from './checkout-item.module.scss';
import cn from 'classnames'

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem, className }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<div className={cn(styles.checkoutItem, className)}>
			<div className={styles.imageContainer}>
				<img src={imageUrl} alt="item" />
			</div>
			<span className={styles.name}>{name}</span>
			<span className={styles.quantity}>
				<div className={styles.arrow} onClick={() => removeItem(cartItem)}>&#10094;</div>
				<span className={styles.value}>{quantity}</span>
				<div className={styles.arrow} onClick={() => addItem(cartItem)}>&#10095;</div>
			</span>
			<span className={styles.price}>{price}</span>
			<div className={styles.removeButton} onClick={() => clearItem(cartItem)}>&#10005;</div>
		</div>
	)
}

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item))
});


export default connect(null, mapDispatchToProps)(CheckoutItem)