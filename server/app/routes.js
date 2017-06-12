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
      res.redirect(302, '/api/login');
		}
	}

function isJWTPresent(req, res, next) {
  // check header or url parameters or post parameters for token
 var token = req.body.token || req.query.token || req.headers['x-access-token'];

 // decode token
 if (token) {

   // verifies secret and checks exp
   jwt.verify(token, app.get('superSecret'), function(err, decoded) {
     if (err) {
       return res.json({ success: false, message: 'Failed to authenticate token.' });
     } else {
       // if everything is good, save to request for use in other routes
       req.decoded = decoded;
       next();
     }
   });

 } else {

   // if there is no token
   // return an error
   return res.status(403).send({
       success: false,
       message: 'No token provided.'
   });

 }
});

  // var pollHandler = new PollHandler();

	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});

	app.route('/login')
		.get(function (req, res) {
      res.send(401, 'login needed ...');
      //res.sendFile(path + '/public/login.html');
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
              // if user is found and password is right
               // return the information including token as JSON
               res.user.token = jwt.sign(user, app.get('superSecret'), {
                 expiresInMinutes: 1440 // expires in 24 hours
               });
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

    app.route('/search').get(isJWTPresent, (req, res) => {

      console.log('passing on search ... ')
    })

    function jwt(req, res, next) {
        // create authorization header with jwt token
        if(req.isAuthenticated()) {
          let currentUser = req.user;
          let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
          return new RequestOptions({ headers: headers });
        }
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }

};
