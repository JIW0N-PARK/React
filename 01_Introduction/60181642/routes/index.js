var express = require('express');
var Comment = require('../models/comment');
const catchErrors = require('../lib/async-error');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  Comment.find({}, function(err, comments){
    if (err) {
      return next(err);
    }
    console.log("Error", err);
    console.log(comments);

    res.render('index', { title: 'Homework 1', comments: comments});
  });
});

router.post('/', catchErrors(async (req, res, next) => {
  var comment = new Comment({
    content: req.body.content
  });

  await comment.save();
  res.redirect('/');
}));


module.exports = router;
