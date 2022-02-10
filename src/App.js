
import './App.css';
import {
  Route,
  Switch,
  Redirect

} from "react-router-dom"
import { connect } from 'react-redux';
import ShopPage from './pages/Shop/shop.component'
import { createStructuredSelector } from 'reselect';
import HomePage from './pages/Homepage/homepage.component'
import Header from './components/Header/header.component';
import SignInAndSignUpPage from './pages/Sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils'
import { React, useEffect } from 'react';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/Checkout/checkout.component';
// import { toggleCartHidden } from './redux/cart/cart.actions';
import { checkUserSession } from './redux/user/user.actions';
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors';
const App = ({ checkUserSession, currentUser }) => {


  useEffect(() => {
    checkUserSession()
  }, [checkUserSession])


  // const { setCurrentUser, collectionsArray } = this.props;



  // this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //   if (userAuth) {
  //     const userRef = await createUserProfileDocument(userAuth);

  //     userRef.onSnapshot(snapShot => {
  //       this.props.setCurrentUser({

  //         id: snapShot.id,
  //         ...snapShot.data()
  //       }
  //       );

  //       // console.log(this.state); 
  //     });
  //   }

  //   setCurrentUser(userAuth);
  //   // addCollectionAndDocuments('collections', collectionsArray.map(({ title, items }) => ({ title, items })))

  // });

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => currentUser ? (<Redirect to="/" />) : (<SignInAndSignUpPage />)} />
      </Switch>
    </div>
  );

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})



// const mapDispatchProps = dispatch => ({
//   setCurrentUser: user => dispatch(setCurrentUser(user))
// });

export default connect(mapStateToProps, mapDispatchToProps)(App);
