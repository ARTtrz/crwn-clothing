import React from 'react';
import styles from './custom-button.module.scss'
import cn from 'classnames'

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
	return (
		<button
			className={cn(styles.customButton, {
				[styles.googleSignIn]: isGoogleSignIn
			})}
			{...otherProps}

		>
			{children}
		</button>
	)
}

export default CustomButton