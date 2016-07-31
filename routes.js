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
