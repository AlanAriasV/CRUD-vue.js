import { Router } from "express";
import multer from "multer";
import {
  testing,
  addImg,
  getAllImages,
  findImgsByTag,
} from "../controllers/gallery.controller";

const router = Router();

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

router.get("/", testing);
router.post("/addImage", upload.single("image"), addImg);
router.get("/getAllImgs", getAllImages);
router.get("/findImgByTag/:tag", findImgsByTag);

export default router;
