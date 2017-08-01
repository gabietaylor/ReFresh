const React = require("react");
const router = require("react-router");
// display individual routes
const Route = router.Route;
// hold all Routes and can config props
const Router = router.Router;

// hashHistory prop to handle routing without a server
const hashHistory = router.hashHistory;
const IndexRoute = router.IndexRoute;

// Main comps
const Main = require("../components/Main");
const Login = require("../components/Login");
const SignUp = require("../components/Signup");

module.exports = (

  // Use the Router Comp to path to Main
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

      {/* If user selects Login or SignUp show the routed comp */}
      <Route path="Login" component={Login} />
      <Route path="Signup" component={SignUp} />

      {/* If user selects any other path... we get the Login Route */}
      <IndexRoute component={Login} />
    </Route>
  </Router>
);