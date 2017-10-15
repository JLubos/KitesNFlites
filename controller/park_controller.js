var express = require('express');

var router = express.Router();
var park = require('../models/park.js');

router.get('/', function(req, res){
	res.redirect('/cats');
});


router.get('/parks', function( req, res){
	park.all(function(data){
		var hbsObject ={park:data};
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


router.post('/parks/create', function(req,res){
	cat.create(['name', 'description'], [req.body.parkName, req.body.description], function(){
		res.redirect('/parks');
	});
});

router.put('/parks/update/:id', function (req,res){
	var condition = 'id = ' +req.params.id;

	console.log('condition', condition);
	cats.update({description: req.body.description}, condition, function(){
		res.redirect('/parks')l
	});
});
/*
router.delete('/cats/delete/:id', function(req,res){
	var condition = 'id =' + req.params.id;
	cat.delete(condition, function(){
		res.redirect('/');
	})
})
*/

module.exports = router;