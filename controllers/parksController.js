var express = require('express');

var router = express.Router();
var park = require('../models/park.js');

router.get('/', function(req, res){
	res.redirect('/');
});


router.get('/parks', function( req, res){
	park.all(function(data){
		var hbsObject = {park:data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


router.post('/', function(req,res){
	cat.create(['parkName', 'description'], [req.body.parkName, req.body.description], function(){
		res.redirect('/');
	});
});

router.put('/:id', function (req,res){
	var condition = 'id = ' +req.params.id;

	console.log('condition', condition);
	cats.update({description: req.body.description}, condition, function(){
		res.redirect('/')l
	});
});

module.exports = router;