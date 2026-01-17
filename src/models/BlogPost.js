import mongoose from "mongoose";

// CommentSchema
const CommentSchema = new mongoose.Schema({
  content: {
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
});

// BlogPost
const BlogPostSchema = new mongoose.Schema({
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
  upvotes: [
    [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: User,
      },
    ],
  ],
});

// BlogPostSchema
BlogPostSchema.index({ title: "text" });

export default mongoose.models.BlogPost ||
  mongoose.model("BlogPost", BlogPostSchema);
