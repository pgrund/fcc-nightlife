'use strict';

var express = require('express');
var routes = require('./app/routes.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();
// require('dotenv').load();
// require('./app/config/passport')(passport);

// mongoose.connect(process.env.MONGO_URI);
// mongoose.Promise = global.Promise;


// app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
// app.use('/common', express.static(process.cwd() + '/app/common'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cookieParser());

app.use(session({
	secret: 'secretFccNightlife',
	resave: false,
  saveUninitialized: false,
	cookie: {
		httpOnly: false,
		secure: false
	}
}));

// app.use(passport.initialize());
// app.use(passport.session());

//app.use('/', express.static(process.cwd() + '/client/dist/'));

routes(app, passport);

app.use(express.static(process.cwd() + '/client/dist'));

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
