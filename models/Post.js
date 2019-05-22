const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Schema
const PostSchema = new Schema({
  name: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users"
      },
      text: {
        type: String,
        required: true
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.naw
      }
    }
  ],
  date: {
    type: Date,
    default: Date.naw
  }
});

module.exports = Post = mongoose.model("posts", PostSchema);
