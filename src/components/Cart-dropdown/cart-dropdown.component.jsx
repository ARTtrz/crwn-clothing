import React from 'react';
import CustomButton from '../Custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../Cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import styles from './cart-dropdown.module.scss'
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropDown = ({ cartItems, history, dispatch, toggleCartHiddenCheckout }) => {
	return (
		<div className={styles.cartDropdown}>
			<div className={styles.cartItems}>
				{
					cartItems.length ?
						cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />
						))
						:
						<span className={styles.emptyMessage}>Your cart is empty</span>
				}
			</div>
			<CustomButton onClick={() => history.push('/checkout')} >GO TO CHECKOUT</CustomButton>
		</div>
	)
}


const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
})



export default withRouter(connect(mapStateToProps)(CartDropDown));