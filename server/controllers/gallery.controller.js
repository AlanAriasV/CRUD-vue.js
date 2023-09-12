import Image from "../models/image";
const path = require("path");

export const addImg = async (req, res) => {
  const img = new Image({
    downVotes: 0,
    img: req.body.img,
    tag: req.body.tag,
    upVotes: 0,
  });
  img
    .save()
    .then((_) => {
      res.status(200).send();
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllImages = async (req, res, _) => {
  try {
    const images = await Image.find({})
      .sort({ _id: -1 })
      .skip(req.params.skip)
      .limit(req.params.limit);
    res.json(images);
  } catch (err) {
    console.log(err);
  }
};

export const findImgsByTag = async (req, res, _) => {
  try {
    const images = await Image.find({ tag: req.params.tag })
      .sort({ _id: -1 })
      .skip(req.params.skip)
      .limit(req.params.limit);
    res.json(images);
  } catch (err) {
    console.log(err);
  }
};

export const updateVotes = async (req, res, _) => {
  try {
    const set = {};
    set[req.body.case] = req.body.votes;
    await Image.findByIdAndUpdate(req.body._id, { $set: set });
    res.status(200).send("OK!");
  } catch (err) {
    console.log(err);
  }
};

export const deleteImage = async (req, res, _) => {
  try {
    await Image.findByIdAndDelete(req.params.id);
    res.status(200).send("OK!");
  } catch (err) {
    console.log(err);
  }
};
