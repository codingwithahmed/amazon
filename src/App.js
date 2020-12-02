import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStatevalue } from './StateProvider';
import Checkout from './components/CheckOut'

function App() {
  const [{} , dispatch] = useStatevalue();

  useEffect (() => {

    auth.onAuthStateChanged( (authUser) => {
      console.log("This  User >>> " , authUser)

      if(authUser){

        dispatch({
          type:"SET_USER",
          user : authUser
        })

      }
      else {
        dispatch({
          type:"SET_USER",
          user:null
        })
      }
    })
  } , [])
  return (
    <div className="App">
<div className="app">
    <Router>
      <Switch>
        
      <Route path="/login">
  <Login />
</Route>

<Route path="/checkout">
 <Checkout />
</Route>
        <Route path="/">
          <Header />
          <Home />
        </Route>
 
      </Switch>
    </Router>
  </div>

    </div>
  );
}

export default App;
