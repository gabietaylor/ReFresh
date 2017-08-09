var React = require("react");
// Link comp to link everything on reload
var Link = require("react-router").Link;

// Create the Main component
var Main = React.createClass({

  // Render Comp
  render: function() {
    return (
          <div className="container">
            {/* Added this.props.children to put child comps in place*/}
            {this.props.children}
          </div>
    );
  }
});

module.exports = Main;