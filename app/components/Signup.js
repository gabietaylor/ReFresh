/*var React = require("react");
var SignUp = React.createClass({

  // Render Comp
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <p>SignUp</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SignUp;*/

var React = require("react");
var SignUp = React.createClass({  render: function() {
    return (

      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          <h1><span className="fa fa-sign-in" /> Signup</h1>
          {/*&lt;% if (message.length &gt; 0) {'{'} %&gt;
          <div className="alert alert-danger">&lt;%= message %&gt;</div>
          &lt;% {'}'} %&gt;*/}
          {/* LOGIN FORM */}
          <form action="/signup" method="post">
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <button type="submit" className="btn btn-warning btn-lg">Signup</button>
            <p>Also with:</p>
            <a href="/auth/facebook" className="btn btn-primary"><span className="fa fa-facebook" /> Facebook</a>
            <a href="/auth/twitter" className="btn btn-info"><span className="fa fa-twitter-plus" /> Twitter</a>
            <a href="/auth/google" className="btn btn-danger"><span className="fa fa-google-plus" /> Google</a>
            <div className="radio">
              <label><input type="radio" name="optradio" />Are you a fresh food seller?</label>
              <label><input type="radio" name="optradio" />Are you a fresh food buyer?</label>
            </div>
          </form>
          <hr />
          <p>Already have an account? <a href="/login">Login</a></p>
          <p>Or go <a href="/">home</a>.</p>
        </div>
      </div>
    );
  }
});

module.exports = SignUp;