var mongoose = require('mongoose');
var schema = mongoose.Schema;

var Schema = new schema({
  content: {type: String, trim: true, required: true}
}, { 
  toJSON: { virtuals: true},
  toObject: {virtuals: true}
});

var Comment = mongoose.model('Comment', Schema);
module.exports = Comment;