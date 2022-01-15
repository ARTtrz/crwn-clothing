import React from 'react';
import SignIn from '../../components/Sign-in/sign-in.component';
import styles from './sign-in-and-sign-up.module.scss'

const SignInAndSignUpPage = () => {
	return (
		<div className={styles.signInAndSignUpPage}>
			<SignIn />
		</div>
	)
}

export default SignInAndSignUpPage