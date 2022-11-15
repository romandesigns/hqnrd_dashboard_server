// Dependencies
import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import databaseConnection from "./db";
import helmet from "helmet";
import http from "http";
import { Server } from "socket.io";

// Instantiations
const app: Application = express();
const server = http.createServer(app);
const io = new Server(server);

dotenv.config();
databaseConnection();
morgan("tiny");

const PORT: number = Number(process.env.PORT) || 8080;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("client/build"));

// If no API routes are hit, send the React app
// Imported Routes
import reservationsApi from "./routes/reservations";
import homeApi from "./routes/home";

// Routes
app.use("/api/reservations", reservationsApi);
app.use("/api/home", homeApi);

// Server
server.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
