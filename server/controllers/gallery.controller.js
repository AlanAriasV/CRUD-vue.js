//import Test from '../models/image'
//import multer from 'multer'
import fs from "fs";
import Image from "../models/image";

export const testing = (req, res) => {
  let path = require("path");
  Image.find({}).then((data, err) => {
    if (err) {
      console.log(err);
    }
    return res.render(path.resolve("./src/test.ejs"), { items: data });
  });
};

//CHANGE ALL THIS METHOD TO MATCH IMAGES LATER, NOW IS ONLY FOR TESTING
export const addImg = async (req, res) => {
  let path = require("path");
  const img = new Image({
    title: req.body.name,
    desc: req.body.desc,
    tag: req.body.tag,
    img: {
      data: fs.readFileSync(path.resolve("./uploads/" + req.file.filename)),
      contentType: "image/png",
    },
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
