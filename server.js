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
const Users = require('./models/Users.js');

const PORT = process.env.PORT || 8080;

// Morgan Logging
app.use(logger('dev'));
// Parse the data
app.use(cookieParser());
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// Grad everything form public
app.use(express.static('./public'));

// grabs data for users or admins
mongoose.connect('Users.url');
//mongoose.connect('mongodb://');

// require('./config/passport')(passport); // pass passport for configuration

const db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Successful mongoose connection.');
});
// required for passport
app.use(session({ secret: 'refreshyourself' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

// Listening on Port
app.listen(PORT, function() {
  console.log("Listening on " + PORT);
});