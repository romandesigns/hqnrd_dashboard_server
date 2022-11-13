"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
var express_1 = require("express");
// Controllers
var reservation_1 = __importDefault(require("../controllers/reservation"));
// Routes instantiation
var router = (0, express_1.Router)();
// Get all reservations
router.route("/").get(reservation_1.default.getAll);
router.route("/:id").get(reservation_1.default.get);
router.route("/:id").patch(reservation_1.default.update);
router.route("/:id").get(reservation_1.default.eliminate);
exports.default = router;
//# sourceMappingURL=reservations.js.map