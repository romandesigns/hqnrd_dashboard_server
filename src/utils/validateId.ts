import mongoose from "mongoose";
const {
	Types: { ObjectId },
} = mongoose;

// Validate ObjectId
const validateObjectId = (id: string) => ObjectId.isValid(id) && new ObjectId(id).toString() === id;

export default validateObjectId;
