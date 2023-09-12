import mongoose from "mongoose";
const Schema = mongoose.Schema;
// USED FOR LATER

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

/*
const testingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
},{timestamps: true})
*/
//Change this to Image
const Image = mongoose.model("Image", imageSchema);
export default Image;
