/*var React = require("react");
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

module.exports = Homepage;*/

var React = require("react");
var Homepage = React.createClass({  render: function() {
    return (
      <div>
        <div className="bgimg w3-display-container w3-text-white">
          <div className="w3-display-middle w3-jumbo">
            <p>ReFresh Yourself</p>
          </div>
          <div className="w3-display-topleft w3-container w3-xlarge">
            <p><button onClick="document.getElementById('signup').style.display='block'" className="w3-button w3-black">SignUp</button></p>
            <p><button onClick="document.getElementById('login').style.display='block'" className="w3-button w3-black">Login</button></p>
          </div>
          <div className="w3-display-bottomleft w3-container">
            <p className="w3-xlarge"> Find Fresh Food in Your Location </p>
            <p className="w3-large"> Support Local Businesses </p>
          </div>
        </div>
        {/* signup Modal */}
        <div id="signup" className="w3-modal">
          <div className="w3-modal-content w3-animate-zoom">
            <div className="w3-container w3-black w3-display-container">
              <span onClick="document.getElementById('signup').style.display='none'" className="w3-button w3-display-topright w3-large">x</span>
              <h1>SignUp</h1>
            </div>
            <div className="w3-container">
              <h5> <b> </b></h5>
              <h5> <b> </b></h5>
              <h5> <b> </b></h5>
            </div>
            <div className="w3-container w3-black">
              <h1> </h1>
            </div>
            <div className="w3-container">
              <h5> <b> </b></h5>
              <h5> <b> </b></h5>
              <h5> <b> </b></h5>
              <h5> <b> </b></h5>
              <h5> <b> </b></h5>
            </div>
            <div className="w3-container w3-black">
              <h1></h1>
            </div>
            <div className="w3-container">
              <h5> <b> </b></h5>
              <h5> <b> </b></h5>
              <h5> <b> </b></h5>
              <h5> <b> </b></h5>
            </div>
          </div>
        </div>
        {/* login Modal */}
        <div id="login" className="w3-modal">
          <div className="w3-modal-content w3-animate-zoom">
            <div className="w3-container w3-black">
              <span onClick="document.getElementById('login').style.display='none'" className="w3-button w3-display-topright w3-large">x</span>
              <h1> Login </h1>
            </div>
            <div className="w3-container">
              <p> </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Homepage;

/*import React from "react";
class Profile extends React.Component {
    constructor(){
        super();
        this.state = {
            show:true
        }
    }
    modalPopUp(){
        console.log("Hello World!!");
        if(this.state.show === true){
            this.setState({show:false});
        } else{
            this.setState({show: true});
        }
        console.log(this.state.show);
    }
    render() {
        var content = (
            <div className="modal">
                <h2>I am Esterling Accime</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium amet asperiores cupiditate dolor error ipsa ipsum laborum nihil sapiente voluptates! Consequuntur c
                    ulpa cupiditate distinctio laborum minima nam, necessitatibus provident repellat?</p>
            </div>
        );
        return (
            <div>
                <h1>Hello World!!!</h1>
                {this.state.show === true ? content : <p>No it's not </p>}
                <button onClick={this.modalPopUp.bind(this)}>Send Data</button>
            </div>
        );
    }
}
export default Profile;*/