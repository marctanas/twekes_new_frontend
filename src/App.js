import React, {useState, useContext, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AppContext from './AppContext';
import About from './About';
import Blog from './Blog';
import Login from './Login';
import Merchants from './Merchants';
import PasswordRecovery from './PasswordRecovery';
import Privacy from './Privacy';
import Profile from './Profile';
import Shop from './Shop';
import Signup from './Signup';
import Terms from './Terms';
import Twekes from './Twekes';

import './App.css';

const PrivateRoute = ({ component: Component, ...otherProps }) => {

  const [globalState, setGlobalState] = useContext(AppContext);

  if(globalState.loggedIn) {
    return(<Route component={Component} {...otherProps} />);
  } else {
    return(<Redirect to="/accounts/login" />);
  }
}


const App = () => {

  const [globalState, setGlobalState] = useState({
    loggedIn: localStorage.getItem('jwt') ? true : false,
    userAdmin: false,
    emailAdmin: "mstanas@hotmail.com",

  });

  useEffect(
    ()=>{
        // when (and if) globalState.loggedIn changes,
        // run the below code
        console.log("This the loggedIn state", globalState.loggedIn)
    }, 
    [globalState.loggedIn]
  )

  return (
    <AppContext.Provider value={[globalState, setGlobalState]}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} component={Twekes}/>
          <Route path="/about" exact={true} component={About}/>
          <Route path="/blog" exact={true} component={Blog}/>
          <Route path="/accounts/signup" exact={true} component={Signup}/>
          <Route path="/accounts/login" exact={true} component={Login}/>
          <Route path="/accounts/passwordrecovery" exact={true} component={PasswordRecovery}/>
          <Route path="/legal/privacy" exact={true} component={Privacy}/>
          <PrivateRoute path="/accounts/profile" exact={true} component={Profile}/>
          <PrivateRoute path="/shop" exact={true} component={Shop}/>
          <PrivateRoute path="/shop/merchants" exact={true} component={Merchants}/>
          <Route path="/legal/terms" exact={true} component={Terms}/>
        </Switch>
      </BrowserRouter>
    </AppContext.Provider>
  )
}

export default App;
