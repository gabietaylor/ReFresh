// Simple NPMs
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// Require Models
var configDB = require('./config/database.js');

var dbConnectString = process.env.MONGODB_URI || "mongodb://localhost/refresh";	

// Database configuration with mongoose
mongoose.connect(dbConnectString, function(error){
	if (error) throw error;

	console.log("Successful mongoose connection.");
});

// Grad everything form public
app.use(express.static('./public'));

//mongoose.connect(configDB.url); // connect to our database
require('./config/passport')(passport); // pass passport for configuration
// required for passport
app.set('view engine', 'ejs');
// Morgan Logging
app.use(logger('dev'));
// Parse the data
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.use(session({ secret: 'refreshyourself',
	//session secret
    resave: true,
    saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./passport/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport// 

// Import routes and give the server access to them.
var routes = require("./controller/controller.js");
app.use("/", routes);

// Listening on Port
app.listen(process.env.PORT || 8080, function() {
  console.log("Listening on 8080");
});