import express from "express";
import { login, register } from "../controllers/auth.js";
import { verifyToken } from "../middleware/auth.js";
import { upload } from "../utils/fileUploadUtils.js";
const router = express.Router();
/* FILE STORAGE */

router.post("/register", upload.single("picture"), register);
router.post("/login", login);
export default router;