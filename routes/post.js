const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  pictue: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  caption: String,
  date:{
    type: Date,
    default: Date.now,
  },
  Likes:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  }]

});

module.exports = mongoose.model("post", postSchema);
