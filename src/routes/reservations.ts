// Dependencies
import { Router } from "express";

// Controllers
import reservation from "../controllers/reservation";

// Routes instantiation
const router = Router();

// Get all reservations
router.route("/").get(reservation.getAll);
router.route("/:id").get(reservation.get);
router.route("/:id").patch(reservation.update);
router.route("/:id").get(reservation.eliminate);

export default router;
