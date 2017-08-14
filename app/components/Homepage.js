var React = require("react");
var Homepage = React.createClass({  render: function() {
    return (

      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
         <div className="jumbotron text-center">
            <h1>ReFresh</h1>
         </div>
          <h1><span className="fa fa-sign-in" /> Login</h1>
          {/*&lt;% if (message.length &gt; 0) {'{'} %&gt;
          <div className="alert alert-danger">&lt;%= message %&gt;</div>
          &lt;% {'}'} %&gt;*/}
          {/* LOGIN FORM */}
          <form action="/login" method="post">
            <div className="form-group">
              <label>Email</label>
              <input type="text" className="form-control" name="email" />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" name="password" />
            </div>
            <button type="submit" className="btn btn-warning btn-lg">Login</button>
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
          <p>Need an account? <a href="/signup">Signup</a></p>
          <p>Or go <a href="/homepage">Home</a>.</p>
        </div>
      </div>
    );
  }
});

module.exports = Homepage;