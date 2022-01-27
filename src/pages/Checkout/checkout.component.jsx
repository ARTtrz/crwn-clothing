import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/Checkout-item/checkout-item.components';
import StripeCheckoutButton from '../../components/Stripe-button/stripe-button.component';
import styles from './checkout.module.scss'

const CheckoutPage = ({ cartItems, total }) => (

	<div className={styles.checkoutPage} >
		<div className={styles.checkoutHeader}>
			<div className={styles.headerBlock}>
				<span>Product</span>
			</div>
			<div className={styles.headerBlock}>
				<span>Description</span>
			</div>
			<div className={styles.headerBlock}>
				<span>Quantity</span>
			</div>
			<div className={styles.headerBlock}>
				<span>Price</span>
			</div>
			<div className={styles.headerBlock}>
				<span>Remove</span>
			</div>

		</div>
		{
			cartItems.map(cartItem =>
				<CheckoutItem cartItem={cartItem} key={cartItem.id} />
			)
		}
		<div className={styles.total}>TOTAL: ${total}</div>
		<div className={styles.testWarning}>
			*Please use the following credit card for payments
			<br />
			4242 4242 4242 4242 - Exp: 02/22 - CVV: 123
		</div>
		<StripeCheckoutButton price={total} />
	</div >

)

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);