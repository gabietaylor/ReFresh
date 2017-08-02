// Simple NPMs
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const flash = require('connect-flash');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

// Require Models
const configDB = require('./config/database.js');

const dbConnectString = process.env.MONGODB_URI || "mongodb://localhost/refresh";	

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
//const routes = require("./controller/controller.js");
// app.use("/", routes);

// Listening on Port
app.listen(process.env.PORT || 8080, function() {
  console.log("Listening on 8080");
});