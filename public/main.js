
const express = require('express')
const app = express()

var Datastore =require('nedb')
var db = new Datastore({filename:'store.db', autoload:true});

app.use(express.static('public'));
app.set('port',process.env.PORT||5000)
app.set('view engine', 'ejs');
var ejs = require('ejs');

app.get('/home', function (req, res) {
	console.log(__dirname);
	res.render('tsnhome');
  })

app.get('/login', function (req, res) {
	res.render('login')
  })

app.get('/loginSubmit', function(req, res){
	var userEmail = req.query.email;
	var userPassword = req.query.password;
	
	var person = {

		"email":userEmail,
		"password":userPassword
	}
	
	db.find(person,function(err,result){
		
		if(result.length>0){
			db.find({},function(err,data){
				res.render('idea',{results:data});
			})
		}else{
			res.render('login');

		}
	})

})

app.get('/homeProfile',function(req,res){
	db.find({},function(err,data){
		res.render('idea',{results:data});
	})
})

app.get('/profile',function(req,res){
	var userEmail = req.query.email;
	console.log(userEmail);
	var person = {
		"email":userEmail
	}
	db.find(person,function(err, result){
		res.render('profile',{results:result});
	})
})

app.get('/showDB',function(req,res){
	db.find({},function(err,result){
		console.log(result);
	})
})

app.get('/signUpSubmit', function(req, res){
	var userName = req.query.name;
	var userEmail = req.query.email;
	var userPassword = req.query.password;
	
	var person = {
		"name":userName,
		"email":userEmail,
		"password":userPassword
	}
	db.insert(person,function(err,result){
		console.log(result,"Insertion Success");
	})
	res.render('login');

})

app.get('/signUp', function (req, res) {
	res.render('signup')
  })

app.get('/test',function (req, res) {

	db.find({},function(err,result){
		res.render('file1',{results:result})
	})
})

app.listen(app.get('port'), function () {
  console.log('Example app listening on port 3000!')
});



