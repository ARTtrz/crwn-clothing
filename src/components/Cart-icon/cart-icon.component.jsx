import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { createStructuredSelector } from 'reselect';

import styles from './cart-icon.module.scss'


const CartIcon = ({ toggleCartHidden, itemCount }) => {
	return (
		<div className={styles.cartIcon} onClick={toggleCartHidden}>
			<ShoppingIcon className={styles.shoppingIcon} />
			<span className={styles.itemCount}>{itemCount}</span>
		</div>
	)
}
const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = createStructuredSelector({
	itemCount: selectCartItemsCount

})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);