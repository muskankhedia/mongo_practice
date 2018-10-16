'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var signup = require('./signup');
const mongo = require('mongodb').MongoClient,
    url ='mongodb+srv://muskan:project@cluster0-4curb.mongodb.net/test?retryWrites=true';

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }));

var server = app.listen(8000, '0.0.0.0' ,function(err){
    if(err) throw err;
    else{
        console.log('Server listening at port: ' + server.address().port);
        console.log('Server listening at address: ' + server.address().address);
    }
});

app.set('view engine', 'html');


app.get('/',function(req,res){
    res.sendFile(__dirname + "/signup.html" );
    console.log("Signup Page ");
});

app.post('/details',function(req,res){
    res.sendFile(__dirname + '/details.html')
    var details = req.body;
    console.log(details);
});

app.post('/',function(req,res){
    // let email = req.body.email,
    //     username = req.body.username,
    //     password = req.body.password,
    //     mobile = req.body.mobile
    
    // mongo.connect(url, (e, dbo) => {
    //     if(e) console.error(e);
    //     console.warn('[SUCCESS] connected to the database');
    //     let db = dbo.db('myproject');
    //     let obj = {
    //         'email':email,
    //         'username':username,
    //         'password':password,
    //         'mobile':mobile
    //     }
    //     db.collection('details').insertOne(obj, (e,res1) =>{
    //         if(e) console.error(e);
    //         else
    //             console.warn('[SUCCESS] inserted into the database with username='+username);

    //         dbo.close();
            
    //     })
        
    // } )
    // res.sendFile(__dirname + '/details.html')
    signup.details(req,res);
    res.send("Hello");
    
 });

 app.get('/login',function(req,res){
     res.sendFile(__dirname + '/login.html')
 });