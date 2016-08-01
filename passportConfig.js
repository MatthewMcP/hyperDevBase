var passportConfig = function(passport) {

    
  // load all the things we need
  var LocalStrategy = require('passport-local').Strategy;
  
  // =========================================================================
  // passport session setup ==================================================
  // =========================================================================
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session

  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
      done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
      User.findById(id, function(err, user) {
          done(err, user);
      });
  });

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-register', new LocalStrategy({
      passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {
    
      var data = datastore.get("userLoginData");
    	//TODO Move to shared
    	function hasValue(obj, key, value) {
    		return obj.hasOwnProperty(key) && obj[key] === value;
    	}
  
  		if(data.some(function(obj) { return hasValue(obj, "username", username); })){
        return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
  		}
  		else{
  		  data.push({"username": username, "password": password});
  		  var updatedValue = JSON.stringify(data);
  		  datastore.set("userLoginData", updatedValue)
        return done(null, newUser);
  		}
  	}
  ));
  
};  

module.exports = passportConfig;
