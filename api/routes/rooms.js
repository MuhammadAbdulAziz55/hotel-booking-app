import express from "express";

import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/room.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", createRoom);

//UPDATE
router.put("/availability/:id", updateRoomAvailability);
router.put("/:id", updateRoom);

//DELETE
router.delete("/:id/:hotelid", deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL

router.get("/", getAllRoom);

export default router;
