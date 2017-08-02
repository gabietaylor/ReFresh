var React = require("react");
var router = require("react-router");
// display individual routes
var Route = router.Route;
// hold all Routes and can config props
var Router = router.Router;

// hashHistory prop to handle routing without a server
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;

// Main comps
var Main = require("../components/Main");
var Login = require("../components/Login");
var Signup = require("../components/Signup");
var ConnectLocal = require("../components/Connect-Local");
var Profile = require("../components/Profile");

module.exports = (

  // Use the Router Comp to path to Main
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Login or SignUp show the routed comp */}
      <Route path="Login" component={Login} />
      <Route path="Signup" component={Signup} />

      {/* If user selects any other path... we get the Login Route */}
      <IndexRoute component={Login} />
    </Route>
  </Router>
);