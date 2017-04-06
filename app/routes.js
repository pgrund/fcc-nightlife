'use strict';

var path = process.cwd();
// var PollHandler = require(path + '/app/controllers/pollHandler.server.js');

module.exports = function (app, passport) {

	function isLoggedIn (req, res, next) {
    console.log('check auth', req.isAuthenticated(), req.user);
		if (req.isAuthenticated()) {
      return next();
		} else {
      console.log('not authenticated');
      req.session.returnTo = req.path;
      res.redirect(302, '/login');
		}
	}

  // var pollHandler = new PollHandler();

	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});
	app.route('/')
		.get(function (req, res) {
			 res.sendFile(path + '/dist/index.html');
		});

	app.route('/login')
		.get(function (req, res) {
      res.sendFile(path + '/dist/login.html');
		});

	app.route('/logout')
		.get(function (req, res) {
      console.log('logged out');
			req.logout();
      req.session.destroy();
			res.redirect('/');
		});

	app.route('/profile')
		.get(isLoggedIn,(req, res)  => {
        res.render('profile');
  		});

  app.route('/auth/local')
      .post(passport.authenticate('local', {
               failureRedirect: '/login',
              //  successReturnToOrRedirect : (req.session.returnTo ? req.session.returnTo : '/')
            }
            ), function(req, res, next) {
              req.session.user = req.user;
              res.json(req.user);
          });


	app.route('/auth/github')
		.get(passport.authenticate('github'));

	app.route('/auth/github/callback')
		.get(passport.authenticate('github', {
			//successRedirect: '/',
			failureRedirect: '/login'
			}),
			function(req,res,next) {
				console.log('github auth done, register user', req.user);
				req.session.user = req.user;
	            res.json(req.user);
			}
		);

};
