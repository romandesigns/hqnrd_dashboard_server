import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";

// Instantiations
const app: Application = express();
dotenv.config();

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = Number(process.env.PORT) || 8080;

// Middleware
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

// Routes
// Server
app.listen(PORT, () => console.log(`🔥 Server running on port ${PORT}`));
