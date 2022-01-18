import React from 'react';
import CustomButton from '../Custom-button/custom-button.component';




import styles from './cart-dropdown.module.scss'

const CartDropDown = () => {
	return (
		<div className={styles.cartDropdown}>
			<div className={styles.cartItems} />
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</div>
	)
}

export default CartDropDown;