var express = require('express');
var router = express.Router();

var path =require('path');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_walking_skeleton');

var Cat = mongoose.model('Cat', {name:String});

router.get("/", function(req, res, next){
    var file = req.params[0] || 'views/index.html';
    res.sendFile(path.join(__dirname,'../public', file));
    //next();
});

module.exports = router;