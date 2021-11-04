var express = require('express');
var app = express();
const bodyparser = require('body-parser')
var files = require('fs');
const DB = require('./MongoDB');


app.use(express.urlencoded({extended : true}));
app.use(express.static(__dirname));
app.use(bodyparser.json())

app.get('/', function(request,response){
    response.sendFile('D:\\Programming\\HTML CSS\\NodeJS\\WD_3.html');
});

app.post('/submit-data', function(request,response){

    var name = request.body.fullname
    var email = request.body.email
    var gender = request.body.gender
    var game = request.body.game
    var address = request.body.address
    var phone = request.body.phone
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())){
        //email is validated
        response.send('Error : Email not verified !'); //can't set headers after they are sent
    }
    //else part
    else{
        data = "Name|" + name +"|Email|"+ email +'|Gender|' + gender + '\n'
        files.appendFile('write_test.txt',data,function(err){
            if(err)
                console.log(err);
            else
                console.log("Write operation complete!");
        });
        var Records = [
            {Name : name, Email : email, Gender : gender, Game : game, Address : address, Phone : phone}
        ]
        DB.insertData("Tournaments", "Chess", Records);
        //response.sendFile('D:\\Programming\\HTML CSS\\NodeJS\\WD_3.html');
        return "localhost:5000#home";
    }
});

app.post('/delete-data', function(request,response){
    console.log('Delete Function called !!!', request.body)
    DB.deleteData("Tournaments", "Chess", request.body.Email);
    console.log('Data for User ID : '+request.body.Email+' is Deleted.');
    response.json({msg:"success"})
    //return "localhost:5000/#home";
});

var server = app.listen(5000, function(){
    console.log("Node server is running at http://localhost:5000")
});
