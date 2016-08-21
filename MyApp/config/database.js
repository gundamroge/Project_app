//引入mongoose
var mongoose = require('mongoose');

// 需填入user/pwd
var dbURI = "mongodb://kuolun:kuolun@ds017584.mlab.com:17584/mean_course";

//連到mlab
mongoose.connect(dbURI);

//monitor connect
mongoose.connection.on('connected', function() {

    console.log('Mongoose connected to ' + dbURI);
});

//monitor connection error
mongoose.connection.on('error', function(err) {
    console.log('Mongoose connection error  ' + err);
});