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
  let pathImage = path.resolve("./") + `\\${req.file.filename}`;
  const img = new Image({
    title: req.body.title,
    desc: req.body.desc,
    tag: req.body.tag,
    img: {
      data: req.body.image,
      data: fs.readFileSync(pathImage),
      contentType: "image/png",
    },
  });
  await img
    .save()
    .then((result) => {
      fs.unlinkSync(pathImage);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getAllImages = async (req, res, next) => {
  try {
    const images = await Image.find({});
    res.json(images);
  } catch (err) {
    next(err);
  }
};

export const findImgsByTag = async (req, res, next) => {
  try {
    const images = await Image.find({ tag: req.params });
    res.json(images);
  } catch (err) {
    next(err);
  }
};
