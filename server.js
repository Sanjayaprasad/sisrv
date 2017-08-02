var express = require('express'),
	app = express(),
	mongojs = require('mongojs'),
	db = mongojs('informationSystem', ['informationSystem']),
	bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.get('/informationSystem', function(req,res){
	console.log("I recived the get Request");
	db.informationSystem.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.post('/informationSystem',function(req,res){
	console.log(req.body);
	db.informationSystem.insert(req.body,function(err,doc){
		res.json(doc);
	});
});

app.listen(3000, function(){
	console.log("Listening At port 3000...");
});