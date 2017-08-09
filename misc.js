// grabs data for users or admins
mongoose.connect('mongodb://localhost/refresh');
//mongoose.connect('mongodb://');

const db = mongoose.connection;

db.on('error', function (err) {
  console.log('Mongoose Error: ', err);
});

db.once('open', function () {
  console.log('Successful mongoose connection.');
});

Can't Load URL: The domain of this URL isn't included in the app's domains. To be able to load this URL, add all domains and subdomains of your app to the App Domains field in your app settings.'

uninstall reat router to 3.0.0 version bc 4 has 