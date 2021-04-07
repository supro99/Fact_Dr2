var express = require('express');
var router = express.Router();
var blogServices = require('../services/blogServices')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/blog', blogServices.createBlog);
module.exports = router;
