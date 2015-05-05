var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next){
    console.log("Here is a console log");
    res.send("Hello World!");
    next();
});

module.exports = router;