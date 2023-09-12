import { Router } from "express";
import {
  addImg,
  getAllImages,
  findImgsByTag,
  deleteImage,
  updateVotes,
} from "../controllers/gallery.controller";

const router = Router();

router.post("/addImage", addImg);
router.get("/getAllImgs/:skip/:limit", getAllImages);
router.get("/findImgByTag/:tag/:skip/:limit", findImgsByTag);
router.delete("/deleteImage/:id", deleteImage);
router.put("/putImage/upVotes/", updateVotes);
router.put("/putImage/downVotes/", updateVotes);

export default router;
