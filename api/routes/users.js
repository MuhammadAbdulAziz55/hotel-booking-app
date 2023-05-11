import express from "express";

import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/user.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user, your are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, your are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello user, your are logged in and you can delete all account");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", deleteUser);

//GET
router.get("/:id", verifyUser, getUser);

//GET ALL

router.get("/", getAllUser);

export default router;
