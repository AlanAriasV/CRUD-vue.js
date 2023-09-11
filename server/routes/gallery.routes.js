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
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

var upload = multer({ storage: storage });

router.get("/", testing);
//router.get('/addImage',addImg)
router.post("/addImage", upload.single("image"), addImg);
router.post("/getAllImgs", getAllImages);
router.post("/findImgByTag/:tag", findImgsByTag);

export default router;
