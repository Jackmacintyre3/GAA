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

exports.getFixtures = function(req,res){

    connection.query("SELECT * FROM fixturesresults WHERE status = 'fixtures'",function(err, rows, fields){
        if (err) throw err;

        res.send(JSON.stringify(rows,null, ' '));
});
}