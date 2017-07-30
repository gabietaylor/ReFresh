const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  date: {
    type: Date,
    default: Date.now,
    required: "Date is Required"
  },
  url: {
    type: String,
    required: true,
    required: "URL is Required",
    unique: true
  }
});

// Model Users Created
const Users = mongoose.model('Users', UsersSchema);

// Export Users
module.exports = Users;