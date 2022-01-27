import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import styles from './stripe-button.module.scss'

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_51KMZhCJ2Jm1TXpVWWqTO1AQBPgv98z1rc6bw1MCyYujLa2APfe3frD5QUKeOT9zzuEfneUxJgj6KT1ca9j4Q8bqC00RT2UYWgN';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful')
	}

	return (
		<StripeCheckout
			label='Pay Now'
			name='CRWN Clothing Ltd.'
			billingAddress
			shippingAddress
			image='https://svgshare.com/i/CUz.svg'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	)
}

export default StripeCheckoutButton;