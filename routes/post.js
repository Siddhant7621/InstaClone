const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  picture: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  caption: String,
  date:{
    type: Date,
    default: Date.now,
  },
  likes:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  }]

});

const post = mongoose.model('post', postSchema);
module.exports = post;
