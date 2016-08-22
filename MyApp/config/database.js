//引入mongoose
var mongoose = require('mongoose');

// 需填入user/pwd
var dbURI = "自行上mlab申請帳號、mongodb URI 按照他只是貼上來做連結";

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