var MongoClient = require('mongodb').MongoClient
const url = "mongodb://localhost:27017/MyMongoDB"

function insertData (Database_Name, Table_Name, Records){

    MongoClient.connect(url, function(err, database){
        
        if (err) throw error;
    
        let db = database.db(Database_Name)
        console.log(Records)
        if (db.collection(Table_Name).find({"Email":Records[0].Email}).count()>0)
            db.collection(Table_Name).updateOne(
                { "Email": Records[0].Email},
                {$set:{Name:Records[0].Name, Email:Records[0].Email, Gender:Records[0].Gender, Game:Records[0].Game, Address:Records[0].Address, Phone:Records[0].Phone}}, 
                function(err, result){
                    if (err) throw err;
                    console.log("||..............Records Updated............||");
                }
            );
        else
            db.collection(Table_Name).insertMany(Records, function(err, result){
                if (err) throw err;
                console.log("||..............Records inserted............||");
            });
    });
}

function updateData (Database_Name, Table_Name, Records){

    MongoClient.connect(url, function(err, database){
        if (err) throw error;
        let db = database.db(Database_Name)
        console.log(Records)
        db.collection(Table_Name).updateOne(
            { "Email": Records[0].Email},
            {$set:{Name:Records[0].Name, Email:Records[0].Email, Category:Records[0].Category, Gender:Records[0].Gender, Game:Records[0].Game, Address:Records[0].Address, Phone:Records[0].Phone}}, 
            function(err, result){
                if (err) throw err;
                console.log("||..............Records Updated............||");
            }
        );
    });
}

function deleteData(Database_Name, Table_Name, email){
    MongoClient.connect(url, function(err, database){
        if (err) throw error;
        let db = database.db(Database_Name)
        db.collection(Table_Name).deleteMany({"Email":email});
    });
}

async function getData(Database_Name, Table_Name){
    await MongoClient.connect(url, async function(err, database){
        if (err) throw error;
        let db = database.db(Database_Name)
        await db.collection(Table_Name).find().toArray(async function(err, docs) {
            console.log(docs)
            return docs;
        });
    });
}


module.exports = { insertData, deleteData, getData, updateData };