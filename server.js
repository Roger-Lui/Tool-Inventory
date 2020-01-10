var express = require('express');
var app = express();
var sqlite3 = require('sqlite3');
var db = new sqlite3.Database('db/tools.db');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routes
app.get('/tools',function(request,response)
{
    console.log('GET request received at /tools');

    response.render('form');
    response.sendFile("tools.html");

    db.all('SELECT * FROM tools',function(err,rows){
        if(err){
            console.log("Error:" + err);
        }
        else{
            response.send(rows);
        }
    });
});


app.post('/tools',function(request,response){
   console.log('POST request received at /tools');
   db.run('INSERT INTO tools VALUES(?,?)', [request.body.tools],function(err){
       if(err){
           console.log ("Error:" + err);
        }
        else{
            response.status(200).redirect('tools.html');
        }
   });
});

app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

