
var MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/MyMongoDB"

MongoClient.connect(url, function(err, database){
    if (err) throw error;
    let db = database.db('IPL')
    var Players = [
        {name:'Sunil Nrine', pid:474, teamid:4},
        {name:'MS Dhoni', pid:77, teamid:7},
        {name:'Rohit Sharma', pid:145, teamid:1},
        {name:'Virat Kohli', pid:318, teamid:3},
        {name:'Ravindra Jadeja', pid:78, teamid:7},
    ] 
    db.collection('Player').insertMany(Players, function(err, result){
        if (err) throw err;
        console.log("One document inserted.");
    });
    

     db.collection('Player').update({pid: 474}, { $set: { name: 'Sunil Narine'} }, {w:1},
        function(err, result){
                if(err) throw err;    
                console.log('One document Updated.');
        });
    
    db.collection('Player').remove({}, {w:1}, function(err, result) {
    
        if(err) throw err;    
    
        console.log('Player Removed.');
    });
});

