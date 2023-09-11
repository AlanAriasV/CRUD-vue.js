import mongoose from "mongoose";
const Schema = mongoose.Schema;
// USED FOR LATER

const imageSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      required: true,
    },
    img: {
      data: Buffer,
      contentType: String,
    },
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
