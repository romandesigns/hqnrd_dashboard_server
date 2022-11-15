"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependencies
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var morgan_1 = __importDefault(require("morgan"));
var dotenv_1 = __importDefault(require("dotenv"));
var db_1 = __importDefault(require("./db"));
var helmet_1 = __importDefault(require("helmet"));
var http_1 = __importDefault(require("http"));
var socket_io_1 = require("socket.io");
// Instantiations
var app = (0, express_1.default)();
var server = http_1.default.createServer(app);
var io = new socket_io_1.Server(server);
dotenv_1.default.config();
(0, db_1.default)();
(0, morgan_1.default)("tiny");
var PORT = Number(process.env.PORT) || 8080;
// Middleware
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true, limit: "50mb" }));
app.use(express_1.default.static("client/build"));
// If no API routes are hit, send the React app
// Imported Routes
var reservations_1 = __importDefault(require("./routes/reservations"));
var home_1 = __importDefault(require("./routes/home"));
// Routes
app.use("/api/reservations", reservations_1.default);
app.use("/api/home", home_1.default);
// Server
server.listen(PORT, function () { return console.log("\uD83D\uDD25 Server running on port ".concat(PORT)); });
//# sourceMappingURL=index.js.map