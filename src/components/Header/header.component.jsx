import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../Cart-icon/cart-icon.component';
import styles from './header.module.scss'
import CartDropDown from '../Cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = ({ currentUser, hidden }) => {
	return (
		<div className={styles.header}>
			<Link className={styles.logoContainer} to='/'>
				<Logo className={styles.logo} />
			</Link>
			<div className={styles.options}>
				<Link className={styles.option} to='/shop'>SHOP</Link>
				<Link className={styles.option} to='/shop'>CONTACT</Link>
				{
					currentUser ?
						(<div className={styles.option} onClick={() => auth.signOut()}>SIGN OUT</div>
						) :
						(<Link className={styles.option} to='/signin'>SIGN IN</Link>
						)
				}
				<CartIcon />

			</div>
			{
				hidden ? null : (<CartDropDown />)
			}
		</div>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);