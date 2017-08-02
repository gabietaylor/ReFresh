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
            <h1><span className="fa fa-lock"></span> Homepage</h1>
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