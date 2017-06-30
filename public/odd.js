const express= require('express');
const app=express();
app.use(express.static('private'));
app.get('/home',function (req,res){
   console.log(__dirname)
	res.sendFile(__dirname+'/private/oddoreven.html')
})

app.get('/check',function (req,res) {
	var num= req.query.no;
	if(num%2==0)
		{res.send("even");}
	else{
		res.send("odd");
	
}})
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

	