var routes = function(app, datastore, passport) {

// ------------------------
// Pages
// ------------------------
app.get("/", function (request, response) {
    //initializeDatastoreOnProjectCreation();
    response.render('index.html', {
      title: "Base Project"
    });
});
app.get("/home.html", function (request, response) {
  response.render('home.html', {
    title: "Home"
  });
});

// ------------------------
// Passport controls
// ------------------------

  app.post('/register', passport.authenticate('local-register', {
      successRedirect : '/profile', // redirect to the secure profile section
      failureRedirect : '/', // redirect back to the signup page if there is an error
      failureFlash : true // allow flash messages
  }));

app.get('/logout', function(req, res) {
      req.logout();
      res.redirect('/');
  });

function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
  }

// ------------------------
// DATASTORE INITIALIZATION
// ------------------------

function initializeDatastoreOnProjectCreation() {
  if (!datastore.get("initialized")) {
    datastore.set("userLoginData", initialUserLoginData);
    datastore.set("initialized", true);
  }
}

var initialUserLoginData = [
  {
    username: "Matthew",
    password: "password"
  },
  {
    username: "Matt",
    password: "password"
  }
];

// ------------------------
// API
// ------------------------
  app.get("/getuserdata", function(req, res) {
      console.log("Received getuserdata");
      var result = datastore.get("userLoginData");
      res.send(result);
  });
  
};

module.exports = routes;
