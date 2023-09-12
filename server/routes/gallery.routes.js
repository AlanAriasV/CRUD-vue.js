import { Router } from "express";
import {
  testing,
  addImg,
  getAllImages,
  findImgsByTag,
  deleteImage,
} from "../controllers/gallery.controller";

const router = Router();

router.get("/", testing);
router.post("/addImage", addImg);
router.get("/getAllImgs/:skip/:limit", getAllImages);
router.get("/findImgByTag/:tag/:skip/:limit", findImgsByTag);
router.delete("/deleteImage/:id", deleteImage);
router.put("/putImage/:id/:upVotes/:downVotes");

export default router;
