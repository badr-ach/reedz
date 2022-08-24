import express from "express";

import auth from "../middlewares/auth.js";
import { signin, signup, loadUser } from "../controllers/users.js";
import { googleLogin, googleSignup } from "../controllers/users.js";

const router = express.Router();
router.post("/signin", signin);
router.post("/signup", signup);
router.post("/googlesignin",googleLogin);
router.post("/googlesignup",googleSignup)
router.post("/loaduser", auth, loadUser)

export default router;