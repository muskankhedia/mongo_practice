console.log("1");
const mongo = require('mongodb').MongoClient,
    url = 'mongodb+srv://muskan:project@cluster0-4curb.mongodb.net/test?retryWrites=true';

var output ={
    'Success':'N',
    'err':'none',
    'result':[]
};

var isErr = false , unique = false;

function resSend(res){
    if(isErr==true){
        output.Success='N';
        output.err='some err occuered in signUp.js'
    }
    else{
        output.Success='Y';
        output.err='none';
    }
    res.send(output);
    output.Success='N';
    output.err='none';
    output.result=[];
}
console.log("2");
function signUps(req,res) {
    alert("Hello")
    let email = req.body.email,
        username = req.body.username,
        password = req.body.password,
        mobile = req.body.mobile
    
    mongo.connect(url, (e, dbo) => {
        if(e) console.error(e);
        console.warn('[SUCCESS] connected to the database');
        let db = dbo.db('myproject');
        let obj = {
            'email':email,
            'username':username,
            'password':password,
            'mobile':mobile
        }
        db.collection('details').insertOne(obj, (e,res1) =>{
            if(e) console.error(e);
            else
                console.warn('[SUCCESS] inserted into the database with username='+username);
            console.warn(res1)
            console.log("reached");
            isErr=false;
            dbo.close();
            resSend(res);
            
        })
        
    } )

    // console.debug(email+username+password+mobile+port)
}

module.export = {
    details:signUps,
}
