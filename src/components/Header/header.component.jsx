import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import CartIcon from '../Cart-icon/cart-icon.component';
import styles from './header.module.scss'
import CartDropDown from '../Cart-dropdown/cart-dropdown.component';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionDiv, OptionLink } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

const Header = ({ currentUser, hidden, signOutStart }) => {
	return (
		<HeaderContainer>
			<LogoContainer to='/'>
				<Logo className={styles.logo} />
			</LogoContainer>
			<OptionsContainer>
				<OptionLink to='/shop'>SHOP</OptionLink>
				<OptionLink to='/shop'>CONTACT</OptionLink>
				{
					currentUser ?
						(<OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
						) :
						(<OptionLink to='/signin'>SIGN IN</OptionLink>
						)
				}
				<CartIcon />

			</OptionsContainer>
			{
				hidden ? null : (<CartDropDown />)
			}
		</HeaderContainer>
	)
}

const mapStateToProps = createStructuredSelector({
	currentUser: selectCurrentUser,
	hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
	signOutStart: () => dispatch(signOutStart())
})
export default connect(mapStateToProps, mapDispatchToProps)(Header);