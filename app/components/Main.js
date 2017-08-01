const React = require("react");
// Link comp to link everything on reload
const Link = require("react-router").Link;

// Create the Main component
const Main = React.createClass({

  // Render Comp
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron text-center">
            <h1>Refresh Yourself!!</h1>          
            <Link to="/Login"><button className="btn btn-default">Login</button></Link>
            <Link to="/Signup"><button className="btn btn-default">Signup</button></Link>
          </div>
          <div className="row">
            <div className="text-center">             
            </div>
          </div>
          <div className="container">
            {/* Added this.props.children to put child comps in place*/}
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Main;