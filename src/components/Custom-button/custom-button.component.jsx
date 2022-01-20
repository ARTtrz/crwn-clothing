import React from 'react';
import styles from './custom-button.module.scss'
import cn from 'classnames'

const CustomButton = ({ children, isGoogleSignIn, inverted, className, ...otherProps }) => {
	return (
		<button
			className={cn(styles.customButton, className, {
				[styles.inverted]: inverted,
				[styles.googleSignIn]: isGoogleSignIn
			})}
			{...otherProps}

		>
			{children}
		</button>
	)
}

export default CustomButton