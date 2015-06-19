var express = require('express');
var router = express.Router();

router.get('/info', function(req, res){
    res.render('info',{title: "Info"});
});
router.get('/problems', function(req, res){
    res.render('problem');
});

module.exports = router;
