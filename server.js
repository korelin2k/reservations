// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var tables = [
  {
    "customerName": "Mason",
    "phoneNumber": "5555435251",
    "customerEmail": "mason@freeloader.com",
    "customerID": "laksdjfklasjdf"
  },
  {
    "customerName": "Tom Hanks",
    "phoneNumber": "6033333333",
    "customerEmail": "tom.hanks@gmail.com",
    "customerID": "1"
  }
];

var waitlist = [
  {
    "customerName": "Sly",
    "phoneNumber": "5555255555",
    "customerEmail": "seeya@sly.com",
    "customerID": "Sly"
  }
]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

// Displays all characters
app.get("/api/tables", function(req, res) {
  return res.json(tables);
});

// Displays all characters
app.get("/api/waitlist", function(req, res) {
  return res.json(waitlist);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
