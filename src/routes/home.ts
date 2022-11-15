// Dependencies
import { Router } from "express";

// Controllers
import home from "../controllers/home";

// Routes instantiation
const router = Router();

// Get all reservations
router.route("/").get(home.getAll);

export default router;
