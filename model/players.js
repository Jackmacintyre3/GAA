var mysql = require('mysql')

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'worldcup2022'
});

connection.connect(function(err){
    if(err) throw err;
    console.log('Successfully connected to MySQL database worldcup2022');
});

exports.getPlayers = function(req , res){
    connection.query("SELECT players.name, players.squadNumber,teams,abbrev,teams.group,teams.ID,teams.name as 'tname' FROM players,teams WHERE players.teamID = teams.ID ", function(err, rows, fields){
        if (err) throw err;

        res.send(JSON.stringify(rows,null, ' '));

    });
}

exports.getPlayers2 = function (req,res,id){
    connection.query("SELECT players.name, players.squadNumber,teams,abbrev,teams.group,teams.ID,teams.name as 'tname' FROM players,teams WHERE players.teamID =" 
    + req.params.id + " and teams.ID =" + req.params.id, function(err, rows, fields) {
        if (err) throw err;

        res.send(JSON.stringify(rows.null, ' '));
    });
}