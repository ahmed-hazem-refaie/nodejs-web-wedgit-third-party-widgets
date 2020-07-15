var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.post('/api/call3rd', function(req, res, next) {
  
  res.render('index',{title:req.body.data}, function (err, output)
 {
     res.json({ html: output });
 });    


});

module.exports = router;
