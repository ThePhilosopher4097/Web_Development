var express = require('express');
var app = express();

app.use(express.urlencoded({extended : true}));

app.get('/', function(request,response){
    response.sendFile('D:\\Programming\\HTML CSS\\WD_2.html');
});

app.post('/submit-data', function(request,response){
    var name = request.body.firstname+ ' ' + request.body.lastname;
    response.send(name+' submitted successfully');
});

app.put('/update_data', function(request,response){
    response.send('PUT Request');
});

app.delete('/delete_data', function(request,response){
    response.send('DELETE Request');
});

var server = app.listen(5000, function(){
    console.log("Node server is running")
});
