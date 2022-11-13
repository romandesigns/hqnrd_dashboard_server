"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var morgan_1 = require("morgan");
var dotenv_1 = require("dotenv");
var helmet_1 = require("helmet");
// Instantiations
var app = (0, express_1["default"])();
dotenv_1["default"].config();
if (!process.env.PORT) {
    process.exit(1);
}
var PORT = Number(process.env.PORT) || 8080;
// Middleware
app.use((0, morgan_1["default"])("tiny"));
app.use((0, helmet_1["default"])());
app.use((0, cors_1["default"])());
app.use(express_1["default"].json());
app.use(express_1["default"].urlencoded({ extended: true, limit: "50mb" }));
// Routes
// Server
app.listen(PORT, function () { return console.log("\uD83D\uDD25 Server running on port ".concat(PORT)); });
