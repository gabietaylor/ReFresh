import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
// Main comps
var Main = require("../components/Main");
var Login = require("../components/Login");
var Signup = require("../components/Signup");
var Profile = require("../components/Profile");
var Homepage = require("../components/Homepage");
var ConnectLocal = require("../components/Connect-Local");

module.exports = (
  // Use the Router Comp to path to Main
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      {/* user selects routes to comp */}
        <Route path="Login" component={Login} />
        <Route path="Signup" component={Signup} />
        <Route path="Profile" component={Profile} />
        <Route path="Homepage" component={Homepage} />
        <Route path="ConnectLocal" component={ConnectLocal} />

      {/* If user selects any other path... we get the Homepage Route */}
      <IndexRoute component={Homepage} />
    </Route>
  </Router>
);