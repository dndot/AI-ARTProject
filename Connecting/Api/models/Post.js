const mangoose = require("mangoose");

const postSechema = new mangoose.Schema({
  user: {
    type: mangoose.Schema.Types.ObjectId,
    ref: "User",
    required: "true",
  },
  prompt: {
    type: String,
    trim: true,
  },
  negativePromt: {
    type: String,
    trim: true,
  },
  size: {
    type: String,
    trim: true,
  },
  quality: {
    type: String,
    trim: true,
  },
  quentity: {
    type: Number,
    trim: true,
  },
  style: {
    type: String,
    strim: true,
  },
  aiModel: {
    type: String,
    strim: true,
  },
  aiMage: [
    {
      type: String,
      required: false,
    },
  ],
  images: [
    {
      type: String,
      required: false,
    },
  ],
  likes: [
    {
      type: mangoose.Schema.Types.ObjectId,
      ref: "User",
    },
  ],
},
{
  timestamps: true,
});

const Post = mangoose.Model("Post", postSechema);

module.exports = Post;
