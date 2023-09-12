import mongoose from "mongoose";
const Schema = mongoose.Schema;

const imageSchema = new Schema(
  {
    downVotes: Number,
    img: {
      type: String,
      required: true,
    },
    tag: String,
    upVotes: Number,
  },
  { timestamps: true }
);

const Image = mongoose.model("Image", imageSchema);
export default Image;
