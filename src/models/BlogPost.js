import mongoose from "mongoose";

const BlogPost = mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
  coverImage: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  category: {
    type: String,
  },
  comments: [CommentSchema],
});
