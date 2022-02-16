import React from 'react';
import CustomButton from '../Custom-button/custom-button.component';
import { connect } from 'react-redux';
import CartItem from '../Cart-item/cart-item.component';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { useHistory } from 'react-router-dom';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import styles from './cart-dropdown.module.scss'
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

const CartDropDown = () => {
	const history = useHistory();
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();


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
			<CustomButton onClick={() => { history.push('/checkout'); dispatch(toggleCartHidden()) }} >GO TO CHECKOUT</CustomButton>
		</div>
	)
}


const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
})



export default (CartDropDown);