// server.js
// where your node app starts

// init project
var bodyParser = require("body-parser");
var hyperWeb= require("hyperweb");
var datastore = require("./datastore").sync;
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

// require('./config/passport')(passport); // pass passport for configuration

app = hyperWeb.blastOff();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

datastore.initializeApp(app);

// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session


var routes = require("./routes.js")(app, datastore, passport);




// ------------------------
// Pages
// ------------------------

app.get("/", function (request, response) {
    initializeDatastoreOnProjectCreation();
    response.render('index.html', {
      title: "Deloitte OnBoarding"
    });
});
app.get("/home.html", function (request, response) {

  response.render('home.html', {
    title: "Home"
  });
});
app.get("/marvin.html", function (request, response) {
  response.render('marvin.html', {
    title: "Talk to Marvin"
  });});

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