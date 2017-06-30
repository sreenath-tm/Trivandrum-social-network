const express= require('express');
const app=express();

app.use(express.static('private'));


var Datastore=require('nedb');
var db = new Datastore({filename:'store1.db',autoload:true}); 




app.get('/register',function (req,res){
   console.log(__dirname)
	res.sendFile(__dirname+'/private/Register.html')
})

app.get('/signupSubmit',function (req,res) {
	var fname = req.query.firstname;
  var sname =req.query.secondname;

	var pass= req.query.pass;
  var repass =req.query.repass;
  var num =req.query.num;
	
    var person = {
     "First Name": fname,"Second name": sname,"num": num,
     "password": pass,"RE confirm password": repass,
}
db.insert(person,function(err,result){
  console.log(result);
  res.send('success inserted');
})
})



app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
