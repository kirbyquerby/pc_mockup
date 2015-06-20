var express = require('express');
var router = express.Router();
var dashboard = require('./dashboard');
router.use('/dashboard', dashboard);
router.get('/info', function(req, res){
    res.render('info',{title: "Info"});
});
router.get('/problems', function(req, res){
    res.render('problems', {title: "Problems"});
});
router.get('/appeals', function(req, res){
  res.render('appeals', {title:'Appeals'});
});
module.exports = router;
