const express= require('express');
const app=express();

app.use(express.static('private'));


var Datastore=require('nedb');
var db = new Datastore({filename:'store.db',autoload:true}); 


app.get('/home',function (req,res){
   console.log(__dirname)
	res.sendFile(__dirname+'/private/trivandrum.html')
})

app.get('/login',function (req,res){
   console.log(__dirname)
	res.sendFile(__dirname+'/private/login.html')
})
app.get('/register',function (req,res){
   console.log(__dirname)
	res.sendFile(__dirname+'/private/Register.html')
})

app.get('/loginSubmit',function (req,res) {
	var useremail = req.query.email;
	var pass= req.query.Password;
	if(useremail=="sreenath@yahoo.com"&& pass=="123")
       { res.send("Login polich keri baaa");}
    else
    	{  res.send("kandam vazhi chaadi oddu");}
    var person = {
     "email": useremail,
     "password":pass
}
db.insert(person,function(err,result){
  console.log(result);
  res.send('success inserted');
})
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
