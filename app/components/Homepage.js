// Include React
var React = require("react");

var Homepage = React.createClass({

  // Here we render the component
  render: function() {

    return (

    <div class="container">

        <div className="jumbotron text-center">
            <h1><span className="fa fa-lock"></span> Homepage</h1>
        </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Homepage;