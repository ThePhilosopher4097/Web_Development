var express = require('express');
var app = express();
const bodyparser = require('body-parser')
const mongoose = require('mongoose');
const cors = require("cors");
const SM = require("../assets/javascript/send_mail");

const DB_URL = require('./config');
console.log(DB_URL)
mongoose.connect(DB_URL);
db = mongoose.connection;

db.once("open", () => {
  console.log("Connection to MongoDB database established successfully..!");
}).on("error", (err) => {
  console.log(err);
});


app.use(express.urlencoded({extended : true}));
app.use(express.static(__dirname));
app.use(bodyparser.json())
app.use(cors())

const Student = require("./schemas/Student");

app.get('/', function(request,response){
    //response.sendFile('D:\\Programming\\HTML CSS\\NodeJS\\WD_3.html');
});

//For Registration
app.post('/submit-data', function(request,response){

    var name = request.body.fullname
    var email = request.body.email
    var bio = request.body.bio
    var gender = request.body.gender
    var password = request.body.password
    var phone = request.body.phone
    var clubs = request.body.clubs
    console.log(request.body);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())){
        //email is validated
        response.json({msg:'Error : Email not verified !', iserror:true, isduplicate:false}); //can't set headers after they are sent
    }
    //else part
    else{
        
        var Records = [
            {Name : name, Email : email, Gender : gender, Phone : phone, Bio:bio, Password:password, Clubs:clubs}
        ]
        
            Student.find({Email:email},(err, docs) => {
            console.log(docs);
            if(docs.length>0){
                response.json({msg:'User already exists !', iserror:true, isduplicate:true});
                console.log("Duplicae ---> "+docs)
            } else{
                    try{
                        Student.insertMany(Records, function(err, result){
                        if (err) throw err;
                        else{
                            console.log("||..............Records inserted............||");
                            SM.sendMail(name, email);
                            response.json({msg:'User Added Successfully !', iserror:false, isduplicate:false});
                        }});
                    }catch(err){response.json({msg:'User already exists !', iserror:true, isduplicate:true});}
            }
        }).catch();

        

    }
});

app.post('/update-data', function(request,response){

    var name = request.body.fullname
    var email = request.body.email
    var category = request.body.category
    var gender = request.body.gender
    var game = request.body.game
    var address = request.body.address
    var phone = request.body.phone
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())){
        response.json({msg:'Error : Email not verified !', iserror:true}); //can't set headers after they are sent
    }
    else{
        var Records = [
            {Name : name, Email : email, Category:category, Gender : gender, Game : game, Address : address, Phone : phone}
        ]
        DB.updateData("Tournaments", "Chess", Records);
        response.json({msg:'User Added Successfully !', iserror:false});
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

//For Login
app.post('/user-login', async function(request,response){

    var username = request.body.username
    var password = request.body.password
    console.log(request.body.username)
    await Student.find({Email:username, Password:password},(err, docs) => {
        console.log(docs);
        if(docs.length>0){
            result = false
        } else{
            result = true
        }
        return response.json({userdata:docs, iserror:result});
    });

});










//-------------------------------------------------------------





app.post('/submit-user', function(request,response){

    var name = request.body.fullname
    var email = request.body.email
    var password = request.body.password
    var bio = request.body.bio
    var phone = request.body.phone
    var gender = request.body.gender

    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())){
        //email is validated
        response.json({msg:'Error : Email not verified !', iserror:true}); //can't set headers after they are sent
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
            {Name : name, Email : email, Password : password, Gender : gender, Phone : phone, Bio : bio}
        ]
        DB.insertData("Student_Colab", "User", Records);
        //response.sendFile('D:\\Programming\\HTML CSS\\NodeJS\\WD_3.html');
        response.json({msg:'User Added Successfully !', iserror:false});

    }
});