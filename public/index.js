var cors = require("cors");
var express = require("express");
var _ = require("underscore");
var bodyParser = require("body-parser");

var teams = require("./model/teams");
var players = require("./model/players");
var results = require("./model/results");
var players1 = require("./model/players1");
var fixtures = require("./model/fixtures");
var login = require("./model/login");
var groupA = require("./model/standings");


var app = express();

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/teams", function(req,res){
    teams.getTeams(req,res);
});

app.get("/players", function(req,res){
    players.getPlayers(req,res);
});

app.get("/players/:id", function(req,res){
    players.getPlayers2(req,res,{id: req.params.id});
});

app.get("/results", function(req,res){
    results.getResults(req,res);
});

app.get("/players1", function(req,res){
    players1.getPlayers1(req,res);
});

app.get("/fixtures", function(req,res){
    fixtures.getFixtures(req,res);
});

app.get("/login", function(req,res){
    login.getLogin(req,res);
});

app.get("/standings", function(req,res){
    groupA.getStandingsA(req,res);
});