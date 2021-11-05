import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

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
          <Route path="/signin" component={SignInAndSignUpPage} />
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


! Verdict: mapDispatchToProps se pokreće prvi i sprema usera ako ga je dohvatio u componentDidMount() u redux store i onda pokreće App komponentu
*/

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
