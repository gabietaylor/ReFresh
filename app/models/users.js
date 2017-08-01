// load the things we need
const mongoose = require('mongoose');
const bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
const UsersSchema = mongoose.Schema({
    local            : {
        email        : String,
        password     : String
    },
    facebook         : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    twitter          : {
        id           : String,
        token        : String,
        displayName  : String,
        Usersname    : String
    },
    google           : {
        id           : String,
        token        : String,
        email        : String,
        name         : String
    },
    farmer           : {
        false        : Boolean
    }
});

// generating a hash
UsersSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
UsersSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

// create the model for Users and expose it to our app
module.exports = mongoose.model('Users', UsersSchema);

// Model Users Created
// const Users = mongoose.model('Users', UsersSchema);

// Export Users
// module.exports = Users;