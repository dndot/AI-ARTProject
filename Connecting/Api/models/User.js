const mangoose = require("mangoose");

const userSechema = new mangoose.Schema({
  username : {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  credit: {
    type: Number,
    default:3,
  },
  
  posts: [
    {
      type: mangoose.Schema.Types.ObjectId,
      ref: "Post",
    },
  ],
},
{
  timestamps: true,
});

const User = mangoose.Model("User", userSechema);

module.exports = User;
