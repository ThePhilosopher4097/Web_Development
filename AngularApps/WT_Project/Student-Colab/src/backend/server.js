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
const Club = require("./schemas/Clubs");

const Club_Data = [
    {id : '1', club_name : 'Chess_Club', club_head_email : 'sameer.patil@mitaoe.ac.in'},
    {id : '2', club_name : 'AI ML Club', club_head_email : 'sameer.patil@mitaoe.ac.in'},
    {id : '3', club_name : 'Art Club', club_head_email : 'atharva.joshi@mitaoe.ac.in'},
    {id : '4', club_name : 'Robotics Club', club_head_email : 'atharva.joshi@mitaoe.ac.in'},
    {id : '5', club_name : 'Ethical Hacking Club', club_head_email : 'sameer.patil@mitaoe.ac.in'},
    {id : '6', club_name : 'GDSC Club', club_head_email : 'aditya.birangal@mitaoe.ac.in'}
]


app.get('/', function(request,response){
    //response.sendFile('D:\\Programming\\HTML CSS\\NodeJS\\WD_3.html');
});

/*______________________________________________________________________________________________________*/
//For Registration
app.post('/submit-data', function(request,response){

    var name = request.body.fullname
    var email = request.body.email
    var bio = request.body.bio
    var gender = request.body.gender
    var password = request.body.password
    var phone = request.body.phone
    var clubs = request.body.clubs
    var profile = request.body.profile
    var date = String(new Date());
    //console.log(date);
    //console.log(request.body);
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(email).toLowerCase())){
        //email is validated
        response.json({msg:'Error : Email not verified !', iserror:true, isduplicate:false}); //can't set headers after they are sent
    }
    //else part
    else{
        
        var Records = [
            {Name : name, Email : email, Gender : gender, Phone : phone, Bio:bio, Password:password, Clubs:clubs, Profilepic:profile,JoinDate:date}
        ]
        
            Student.find({Email:email},(err, docs) => {
            //console.log(docs);
            if(docs.length>0){
                response.json({msg:'User already exists !', iserror:true, isduplicate:true});
                //console.log("Duplicae ---> "+docs)
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

/*_____________________________________________________________________________________________________________________*/

app.get('/get-clubs', async function(request,response){
    await Club.find({},(err, docs) => {
        console.log(docs);
        if(docs.length>0){
            response.json({msg:'Club found !', club_list:docs, ispresent:true});
            //console.log("Duplicate Clubs ---> "+docs)
        } else{
                try{
                    Club.insertMany(Club_Data, function(err, result){
                    if (err) throw err;
                    else{
                        console.log("||..............Clubs Created............||");
                        response.json({msg:'Clubs Added Successfully !', club_list:docs, ispresent:false});
                    }});
                }catch(err){response.json({msg:'Clubs already exists !', club_list:docs, ispresent:true});}
        }
        }).catch();
})

/*_____________________________________________________________________________________________________________________*/


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

/*_________________________________________________________________________________________________________________*/
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




/*
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

*/