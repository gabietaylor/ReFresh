const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  userName: {
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

// Model Users Created
const Users = mongoose.model('Users', UsersSchema);

// Export Users
module.exports = Users;