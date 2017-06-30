const express= require('express');
const app=express();

app.use(express.static('private'));


var Datastore=require('nedb');
var db = new Datastore({filename:'store.db',autoload:true}); 

app.set('view engine','ejs');


app.get('/login',function (req,res){
   console.log(__dirname)
	res.sendFile(__dirname+'/private/login.html')
})


app.get('/loginSubmit',function (req,res) {
	var useremail = req.query.email;
	var pass= req.query.Password;
	
    var person = {
     "email": useremail,
     "password":pass
}
 db.find(person,function(err,result){
      console.log(result);
      if (result.length>0) {
        res.send("login pwolich");
      }
      else
        { res.send("oodu");}
})


})

app.get('/test',function(req,res){

   res.render('hello',{name:"sreebro"})
  })

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
