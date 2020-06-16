import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";

// import NavBarContainer from "./nav/navbar_container";

import MainPage from "./main/main_page";
import GreetingContainer from './greeting/greeting_container'
import Modal from './modal/modal'
import SplashPage from "./splash/splash";
import UsersPageContainer from "./user/user_container"


const App = () => (
  <div>
    {/* <NavBarContainer /> */}
    <Modal /> 
    <Route exact path="/" component={SplashPage} /> 
    <GreetingContainer />

    <Switch>
      <ProtectedRoute path='/user/:user_id' component={UsersPageContainer} />
      {/* <AuthRoute exact path="/" component={MainPage} />  */}
      {/* <AuthRoute exact path="/login" component={LoginFormContainer} /> 
      <AuthRoute exact path="/signup" component={SignupFormContainer} /> */}
    </Switch>
  </div>
);

export default App;
