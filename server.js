// Simple NPMs
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// Require Models
const Admins = require('./models/Admins.js');
const Admins = require('./models/Users.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Morgan Logging
app.use(logger('dev'));
// Parse the data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
// Grad everything form public
app.use(express.static('./public'));