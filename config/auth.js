// expose our config directly to our app
module.exports = {
    'facebookAuth' : {
        'clientID'      : '219193108605742', // your App ID
        'clientSecret'  : '65fb01a2fcdc1bc6a6958b9279a1b643', // your App Secret
        'callbackURL'   : 'http://localhost:8080/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'HcMGRxJ6BG3cXcEkn70xlLFa8',
        'consumerSecret'    : 'qFj4ZWQchmEaonfoiX4Y2Xzce4nyI54p5xdhsevKp1Wj9W9wts',
        'callbackURL'       : 'http://localhost:8080/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : '268481452514-0kh0esmkk807g3sj652g90teq3apds6g.apps.googleusercontent.com',
        'clientSecret'  : 'q6E7Nz_50JJv8n5vMhKhhKZs',
        'callbackURL'   : 'http://localhost:8080/auth/google/callback'
    }
};