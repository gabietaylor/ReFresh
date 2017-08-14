/*var React = require("react");
var Profile = React.createClass({

  // Render Comp
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
          <p>Profile</p>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Profile;*/

var React = require("react");
var Profile = React.createClass({  render: function() {
    return (

      <div className="container">
        <div className="page-header text-center">
          <h1><span className="fa fa-anchor" /> Profile Page</h1>
          <a href="/logout" className="btn btn-default btn-sm">Logout</a>
        </div>
        <div className="row">
          {/* LOCAL INFORMATION */}
          <div className="col-sm-6">
            <div className="well">
              <h3><span className="fa fa-user" /> Local</h3>
{/*              &lt;% if (user.local.email) {'{'} %&gt;
*/}              <p>
                <strong>id</strong>: {/*&lt;%= user._id %&gt;*/}<br />
                <strong>email</strong>: {/*&lt;%= user.local.email %&gt;*/}<br />
                <strong>password</strong>: {/*&lt;%= user.local.password %&gt;*/}
              </p>
              <a href="/unlink/local" className="btn btn-default">Unlink</a>
{/*              &lt;% {'}'} else {'{'} %&gt;
*/}              <a href="/connect/local" className="btn btn-default">Connect Local</a>
{/*              &lt;% {'}'} %&gt;
*/}            </div>
          </div>
          {/* FACEBOOK INFORMATION */}
          <div className="col-sm-6">
            <div className="well">
              <h3 className="text-primary"><span className="fa fa-facebook" /> Facebook</h3>
              {/* check if the user has this token (is the user authenticated with this social account) */}
{/*              &lt;% if (user.facebook.token) {'{'} %&gt;
*/}              <p>
                <strong>id</strong>: {/*&lt;%= user.facebook.id %&gt;*/}<br />
                <strong>token</strong>: {/*&lt;%= user.facebook.token %&gt;*/}<br />
                <strong>email</strong>: {/*&lt;%= user.facebook.email %&gt;*/}<br />
                <strong>name</strong>: {/*&lt;%= user.facebook.name %&gt;*/}<br />
              </p>
              <a href="/unlink/facebook" className="btn btn-primary">Unlink</a>
{/*              &lt;% {'}'} else {'{'} %&gt;
*/}              <a href="/connect/facebook" className="btn btn-primary">Connect Facebook</a>
{/*              &lt;% {'}'} %&gt;
*/}            </div>
          </div>
        </div>
        <div className="row">
          {/* TWITTER INFORMATION */}
          <div className="col-sm-6">
            <div className="well">
              <h3 className="text-info"><span className="fa fa-twitter" /> Twitter</h3>
{/*              &lt;% if (user.twitter.token) {'{'} %&gt;
*/}              <p>
                <strong>id</strong>: {/*&lt;%= user.twitter.id %&gt;*/}<br />
                <strong>token</strong>: {/*&lt;%= user.twitter.token %&gt;*/}<br />
                <strong>display name</strong>: {/*&lt;%= user.twitter.displayName %&gt;*/}<br />
                <strong>username</strong>: {/*&lt;%= user.twitter.username %&gt;*/}
              </p>
              <a href="/unlink/twitter" className="btn btn-info">Unlink</a>
{/*              &lt;% {'}'} else {'{'} %&gt;
*/}              <a href="/connect/twitter" className="btn btn-info">Connect Twitter</a>
{/*              &lt;% {'}'} %&gt;
*/}            </div>
          </div>
          {/* GOOGLE INFORMATION */}
          <div className="col-sm-6">
            <div className="well">
              <h3 className="text-danger"><span className="fa fa-google-plus" /> Google+</h3>
{/*              &lt;% if (user.google.token) {'{'} %&gt;
*/}              <p>
                <strong>id</strong>: {/*&lt;%= user.google.id %&gt;*/}<br />
                <strong>token</strong>: {/*&lt;%= user.google.token %&gt;*/}<br />
                <strong>email</strong>:{/* &lt;%= user.google.email %&gt;*/}<br />
                <strong>name</strong>: {/*&lt;%= user.google.name %&gt;*/}
              </p>
              <a href="/unlink/google" className="btn btn-danger">Unlink</a>
{/*              &lt;% {'}'} else {'{'} %&gt;
*/}              <a href="/connect/google" className="btn btn-danger">Connect Google</a>
{/*              &lt;% {'}'} %&gt;
*/}            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Profile;