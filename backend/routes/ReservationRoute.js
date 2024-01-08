import express from "express";
import { sendReservation } from "../controllers/reservation.js";
const router = express.Router();

router.post("/send", sendReservation);

export default router;