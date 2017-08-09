var React = require("react");
var Homepage = React.createClass({

  // Render Comp
  render: function() {
    return (
<div className="container">

    <div className="jumbotron text-center">
        <h1><span className="fa fa-lock"></span> ReFresh Homepage </h1>
    </div>
        
        <p>Already have an account? <a href="/login">Login</a></p>
        <p>Need an account? <a href="/signup">Signup</a></p>
        
</div>
    );
  }
});

module.exports = Homepage;

/*var React = require("react");
var Homepage = React.createClass({
  displayName: "Homepage",


  // Render Comp
  render: function render() {
    return React.createElement(
      "div",
      { className: "bgimg w3-display-container w3-text-white" },
      React.createElement(
        "div",
        { className: "w3-display-middle w3-jumbo" },
        React.createElement(
          "p",
          null,
          "ReFresh Yourself"
        )
      ),
      React.createElement(
        "div",
        { className: "w3-display-topleft w3-container w3-xlarge" },
        React.createElement(
          "p",
          null,
          React.createElement(
            "button",
            { onClick: "document.getElementById('signup').style.display='block'", className: "w3-button w3-black" },
            "signup"
          )
        ),
        React.createElement(
          "p",
          null,
          React.createElement(
            "button",
            { onClick: "document.getElementById('login').style.display='block'", className: "w3-button w3-black" },
            "login"
          )
        )
      ),
      React.createElement(
        "div",
        { className: "w3-display-bottomleft w3-container" },
        React.createElement(
          "p",
          { className: "w3-xlarge" },
          " Find Fresh Food in Your Location "
        ),
        React.createElement(
          "p",
          { className: "w3-large" },
          " Support Local Businesses "
        )
      ),
      React.createElement(
        "div",
        { id: "signup", className: "w3-modal" },
        React.createElement(
          "div",
          { className: "w3-modal-content w3-animate-zoom" },
          React.createElement(
            "div",
            { className: "w3-container w3-black w3-display-container" },
            React.createElement(
              "span",
              { onClick: "document.getElementById('signup').style.display='none'", className: "w3-button w3-display-topright w3-large" },
              "x"
            ),
            React.createElement(
              "h1",
              null,
              "SignUp"
            )
          ),
          React.createElement(
            "div",
            { className: "w3-container" },
            React.createElement(
              "h5",
              null,
              " ",
              React.createElement(
                "b",
                null,
                " "
              )
            ),
            React.createElement(
              "h5",
              null,
              " ",
              React.createElement(
                "b",
                null,
                " "
              )
            ),
            React.createElement(
              "h5",
              null,
              " ",
              React.createElement(
                "b",
                null,
                " "
              )
            )
          ),
          React.createElement(
            "div",
            { className: "w3-container w3-black" },
            React.createElement(
              "h1",
              null,
              " "
            )
          ),
          React.createElement(
            "div",
            { className: "w3-container" },
            React.createElement(
              "h5",
              null,
              " ",
              React.createElement(
                "b",
                null,
                " "
              )
            ),
            React.createElement(
              "h5",
              null,
              " ",
              React.createElement(
                "b",
                null,
                " "
              )
            ),
            React.createElement(
              "h5",
              null,
              " ",
              React.createElement(
                "b",
                null,
                " "
              )
            ),
            React.createElement(
              "h5",
              null,
              " ",
              React.createElement(
                "b",
                null,
                " "
              )
            ),
            React.createElement(
              "h5",
              null,
              " ",
              React.createElement(
                "b",
                null,
                " "
              )
            )
          ),
          React.createElement(
            "div",
            { className: "w3-container w3-black" },
            React.createElement(
              "h1",
              null,
              "  "
            )
          ),
          React.createElement(
            "div",
            { className: "w3-container" },
            React.createElement(
              "h5",
              null,
              " ",
              React.createElement(
                "b",
                null,
                " "
              )
            ),
            React.createElement(
              "h5",
              null,
              " ",
              React.createElement(
                "b",
                null,
                " "
              )
            ),
            React.createElement(
              "h5",
              null,
              " ",
              React.createElement(
                "b",
                null,
                " "
              )
            ),
            React.createElement(
              "h5",
              null,
              " ",
              React.createElement(
                "b",
                null,
                " "
              )
            )
          )
        )
      ),
      React.createElement(
        "div",
        { id: "login", className: "w3-modal" },
        React.createElement(
          "div",
          { className: "w3-modal-content w3-animate-zoom" },
          React.createElement(
            "div",
            { className: "w3-container w3-black" },
            React.createElement(
              "span",
              { onClick: "document.getElementById('login').style.display='none'", className: "w3-button w3-display-topright w3-large" },
              "x"
            ),
            React.createElement(
              "h1",
              null,
              " Login "
            )
          ),
          React.createElement(
            "div",
            { className: "w3-container" },
            React.createElement(
              "p",
              null,
              " "
            )
          )
        )
      )
    );
  }
});

module.exports = Homepage;*/