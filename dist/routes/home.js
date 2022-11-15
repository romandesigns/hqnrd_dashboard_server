"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
var express_1 = require("express");
// Controllers
var home_1 = __importDefault(require("../controllers/home"));
// Routes instantiation
var router = (0, express_1.Router)();
// Get all reservations
router.route("/").get(home_1.default.getAll);
exports.default = router;
//# sourceMappingURL=home.js.map