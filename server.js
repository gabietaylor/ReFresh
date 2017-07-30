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