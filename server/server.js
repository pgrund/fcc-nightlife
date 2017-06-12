'use strict';

var express = require('express');
var routes = require('./app/routes.js');
var mongoose = require('mongoose');
var passport = require('passport');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

var app = express();
// require('dotenv').load();
require('./app/passport')(passport);

mongoose.connect(process.env.MONGO_URI);
mongoose.Promise = global.Promise;


app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(cookieParser());


// app.use(passport.initialize());

//app.use('/', express.static(process.cwd() + '/client/dist/'));

var router = express.Router();

routes(router, passport);

app.use('/api', router);

app.use(express.static(process.cwd() + '/public'));

var port = process.env.PORT || 8080;
app.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});
