import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
// Main comps
var Main = require("../components/Main");
var Login = require("../components/Login");
var Signup = require("../components/Signup");
var Profile = require("../components/Profile");
module.exports = (
  // Use the Router Comp to path to Main
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/* If user selects Login or SignUp show the routed comp */}
        <Route path="Login" component={Login} />
        <Route path="Signup" component={Signup} />
        <Route path="Profile" component={Profile} />
      {/* If user selects any other path... we get the Login Route */}
      <IndexRoute component={Login} />
    </Route>
  </Router>
);