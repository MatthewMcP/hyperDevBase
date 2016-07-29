var routes = function(app, datastore, passport) {

  app.get("/getuserdata", function(req, res) {
      console.log("Received getuserdata");
      var result = datastore.get("userLoginData");
      res.send(result);
  });
};

module.exports = routes;
