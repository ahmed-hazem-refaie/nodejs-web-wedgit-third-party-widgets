var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/call3rd', function(req, res, next) {


  try{
    axios.post('http://localhost:3031/api/call3rd',{data:req.body.input})
               .then(data => 
                {
                console.log(data.data);
                res.send(data.data);
                })
           .catch(err => res.send({html:'<h1 style="color:"white"">not conected plz run second server</h1>'}));
 }
 catch(err){
    console.error("GG", err);
 }
});

router.post('/post', function(req, res, next) {
  res.render('index1', { title: 'Express' });
});

module.exports = router;
