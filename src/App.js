import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

class App extends React.Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}

/* 
! Connectom povezujes App.js sa reduxom, ali prije toga izvrsis (null, mapDispatchToProps) funkciju koja proslijedi usera do user.actions koji nam vrati type="SET_CURRENT_USER" i payload sa podacima o useru
* Dakle, setCurrentUser: (user) => dispatch(setCurrentUser(user)) nam šalje podatke(odnosno payload) spremljene u (user) iz 
    {
      id: snapShot.id,
      ...snapShot.data(),
    }
* te ih pomocu dispatcha šalje setCurrentUser actionu koji se nalazi u user.actions koji onda prima payload, odnosno podatke koje je mapDispatchToProps njemu poslao
! export default connect(null, mapDispatchToProps)(App);
* Prvo se pokrene prva zagrada, pa kad se ona izvrsi, onda se pokrene druga, odnosno (App)


! Verdict: mapDispatchToProps se pokreće prvi i postavi currentUsera null i onda se pokreće App, odnosno componentDidMount() koji dohvati usera kada se prijavimo ili smo prijavljeni i onda pozove funkciju
! deklariranu u mapDispatchToProps gdje šalje podatke o useru nakon čega se App re-rendera te se ponovo? pokrene mapDispatchToProps koji sada pošalje podatke u redux store te sada imamo currentUsera
*/

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
