import React from 'react';
import CustomButton from '../Custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../Cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../redux/cart/cart.selectors';
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

const mapStateToProps = (state) => ({
	cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));