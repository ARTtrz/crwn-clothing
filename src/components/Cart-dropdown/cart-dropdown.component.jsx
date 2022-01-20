import React from 'react';
import CustomButton from '../Custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../Cart-item/cart-item.component';


import styles from './cart-dropdown.module.scss'

const CartDropDown = ({ cartItems }) => {
	return (
		<div className={styles.cartDropdown}>
			<div className={styles.cartItems}>
				{cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
			</div>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	)
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems
})

export default connect(mapStateToProps)(CartDropDown);