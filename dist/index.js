"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const dotenv_1 = __importDefault(require("dotenv"));
const helmet_1 = __importDefault(require("helmet"));
// Instantiations
const app = (0, express_1.default)();
dotenv_1.default.config();
if (!process.env.PORT) {
    process.exit(1);
}
const PORT = Number(process.env.PORT) || 8080;
// Middleware
app.use((0, morgan_1.default)("tiny"));
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true, limit: "50mb" }));
// Routes
console.log("This is a test");
// Server
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
//# sourceMappingURL=index.js.map