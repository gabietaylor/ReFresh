const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminsSchema = new Schema({
  adminName: {
    type: String,
    trim: true,
    required: "UserName is Required"
  },
  password: {
    type: String,
    trim: true,
    required: "Password is Required"
  },
  favLocations: {
    type: String,
    trim: true
  }
});

// Model Admins Created
const Admins = mongoose.model('Admins', AdminsSchema);

// Export Admins
module.exports = Admins;