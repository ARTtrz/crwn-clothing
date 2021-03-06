import React from 'react';
import FormInput from '../Form-input/form-input.component';
import styles from './sign-in.module.scss'
import CustomButton from '../Custom-button/custom-button.component';
import { connect } from 'react-redux';
// import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart, emailSignInStart, } from '../../redux/user/user.actions';

class SignIn extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
		}
	}
	handleSumbit = async (e) => {
		e.preventDefault();
		const { emailSignInStart } = this.props
		const { email, password } = this.state

		emailSignInStart(email, password)
		// try {
		// 	await auth.signInWithEmailAndPassword(email, password)
		// 	this.setState({ email: '', password: '' })
		// } catch (e) {
		// 	console.log(e);

		// }

	}

	handleChange = (e) => {
		const { value, name } = e.target;

		this.setState({ [name]: value })

	}

	render() {
		const { googleSignInStart } = this.props
		return (
			<div className={styles.signIn}>
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSumbit}>
					<FormInput
						name='email'
						type="email"
						value={this.state.email}
						handleChange={this.handleChange}
						label="Email"
						required />
					<FormInput
						name='password'
						type="password"
						label="Password"
						value={this.state.password}
						handleChange={this.handleChange}
						required />
					<div className={styles.buttons}>
						<CustomButton type='submit'> Sign in </CustomButton>
						<CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>
							{' '}
							Sign in with Google{' '}
						</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password })),

})

export default connect(null, mapDispatchToProps)(SignIn);