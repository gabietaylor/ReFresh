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
var Homepage = require("../components/Homepage");
var Login = require("../components/Login");
var SignUp = require("../components/Signup");

module.exports = (

  // Use the Router Comp to path to Main
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Login or SignUp show the routed comp */}
      <Route path="Homepage" component={Homepage} />
      <Route path="Login" component={Login} />
      <Route path="Signup" component={SignUp} />

      {/* If user selects any other path... we get the Login Route */}
      <IndexRoute component={Login} />
    </Route>
  </Router>
);