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
const httpServer = http.createServer(app);

interface ServerToClientEvents {
	noArg: () => void;
	basicEmit: (a: number, b: string, c: Buffer) => void;
	withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
	hello: () => void;
}

interface InterServerEvents {
	ping: () => void;
}

interface SocketData {
	name: string;
	age: number;
	cors: {
		origin: string;
	};
}

const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData>(httpServer, {
	//@ts-ignore
	cors: {
		origin: "http://localhost:3000",
	},
});

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

io.on("connection", function (socket) {
	console.log("a user connected");
});

// Server
httpServer.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
