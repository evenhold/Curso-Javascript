var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
route.get("/contacto", (req, res, next)=>{
  res.render("contacto");
});
module.exports = router;
