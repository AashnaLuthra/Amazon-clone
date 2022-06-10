import './App.css';
import Header from './Header'
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login'
import Payment from './Payment'
import Orders from './Orders'

import { useEffect } from 'react';
import { auth } from "./firebase";
import { useStateValue } from './StateProvider';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51L570ISAN42OmN5sq2OPH10h5DWx301yYXRo56LNNerMrDJLgVqTSgcGgFV5Hm6wa9r3fdlX16rRMUN0km6WxMEq00rxRDjhPL');

function App() {

  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when app component loads

    auth.onAuthStateChanged(authUser => {
      console.log("this is the user", authUser);

      if (authUser) {
        //user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //the useer is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    //
    <Router>
      <div className="App">
        <Switch>

          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>


          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise} >
              <Payment />
            </Elements>
          </Route>


          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
