/*var React = require("react");
var ConnectLocal = React.createClass({

  // Render Comp
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <p>Connect-Local</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = ConnectLocal;*/
var React = require("react");
var ConnectLocal = React.createClass({
  render: function() {
    return (

      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          <h1><span className="fa fa-user" /> Add Local Account</h1>
          {/*&lt;% if (message.length &gt; 0) {'{'} %&gt;
          <div className="alert alert-danger">&lt;%= message %&gt;</div>
          &lt;% {'}'} %&gt;*/}
          {/* LOGIN FORM */}
          <form action="/connect/local" method="post">
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <button type="submit" className="btn btn-warning btn-lg">Add Local</button>
          </form>
          <hr />
          <p><a href="/homepage">Go back to homepage</a></p>
        </div>
      </div>
    );
  }
});

module.exports = ConnectLocal;