var express = require('express');
var router = express.Router();
var dashboard = require('./dashboard');
router.use('/dashboard', dashboard);
router.get('/info', function(req, res){
    res.render('info',{title: "Info"});
});
router.get('/problems', function(req, res){
    res.render('problem');
});

module.exports = router;
