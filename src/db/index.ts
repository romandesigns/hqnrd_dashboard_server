import mongoose from "mongoose";

const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI as string);
		if (mongoose.connection.readyState === 1) {
			console.log("Database connected");
		} else {
			console.log("Database connection error");
		}
	} catch ({ message }) {
		console.error(`Error: ${message}`);
		process.exit(1);
	}
};

export default connectDB;
