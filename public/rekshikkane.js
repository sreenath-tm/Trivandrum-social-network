const express= require('express');
const app=express();

app.get('/', function (req, res) {
	console.log(__dirname);
  res.sendFile(__dirname+'/rekshikkane.html');})

app.get('/portfolio', function (req, res) {
	console.log(__dirname);
  res.sendFile(__dirname+'/raksha1.html');})

app.get('/about', function (req, res) {
	console.log(__dirname);
  res.sendFile(__dirname+'/raksha2.html');})
app.get('/contactme', function (req, res) {
	console.log(__dirname);
  res.sendFile(__dirname+'/raksha3.html');})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})

