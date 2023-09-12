//import Test from '../models/image'
//import multer from 'multer'
import fs from "fs";
import Image from "../models/image";
const path = require("path");

export const testing = (req, res) => {
  Image.find({}).then((data, err) => {
    if (err) {
      console.log(err);
    }
    return res.render(path.resolve("./src/test.ejs"), { items: data });
  });
};

//CHANGE ALL THIS METHOD TO MATCH IMAGES LATER, NOW IS ONLY FOR TESTING
export const addImg = async (req, res) => {
  // let pathImage = path.resolve("./") + `\\${req.file.filename}`;
  // console.log(req.body);
  const img = new Image({
    downVotes: 0,
    img: req.body.img,
    tag: "undefined",
    upVotes: 0,
  });
  await img
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllImages = async (req, res, next) => {
  try {
    const images = await Image.find({})
      .sort({ _id: 1 })
      .skip(req.params.skip)
      .limit(req.params.limit);
    res.json(images);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

export const findImgsByTag = async (req, res, next) => {
  try {
    const images = await Image.find({ tag: req.params.tag })
      .skip(req.params.skip)
      .limit(req.params.limit);
    res.json(images);
  } catch (err) {
    next(err);
  }
};

export const deleteImage = async (req, res, next) => {
  try {
    // console.log(req.params.id);
    const image = await Image.findByIdAndDelete(req.params.id);
    res.status(200).send();
  } catch (err) {}
};
