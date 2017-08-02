var React = require('react');
var ReactDOM = require('react-dom');
// var Main = require('./Components/Main')
var routes = require("./config/routes");

// Render Routes in App
ReactDOM.render(
	routes, document.getElementById('app')
);