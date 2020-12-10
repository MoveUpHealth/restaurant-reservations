var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var tables = [
    {
      table: "1234",
      id: "1234",
      name: "John Smith",
      email: 'john@smith.com',
      phone: '555-555-5555'
    }
]

var waitlist = []

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  
app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });

  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

  app.get("/api/tables", function(req, res) {
    return res.json(tables);
  });

  app.get("/api/waitlist", function(req, res) {
    return res.json(waitlist);
  });

  app.post("/api/tables", function(req, res) {
    
    var newReservation = req.body;

    console.log(newReservation);
  
    tables.push(newReservation);
  
    res.json(newReservation);
  });

  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

  