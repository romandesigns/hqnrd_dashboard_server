import mongoose from "mongoose";
import { UserDocumentInterface } from "../interfaces";

interface UserDocumenTypes extends mongoose.Document {
	fullDocument: UserDocumentInterface;
}

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			maxlength: 30,
			required: true,
			trim: true,
		},
		profile: {
			type: String,
			required: true,
			trim: true,
		},
		identification: {
			type: String,
			required: true,
			trim: true,
		},
		lastName: {
			type: String,
			maxlength: 30,
			required: [true, "Last name cannot be more than 30 characters long"],
			trim: true,
		},
		dob: {
			type: String,
			required: true,
			trim: true,
		},
		phone: {
			type: String,
			unique: true,
			required: [true, "Please enter a valid phone number"],
			trim: true,
		},

		identificationType: {
			type: String,
			trim: true,
		},

		email: {
			type: String,
			unique: true,
			required: [true, "Please enter a valid email address"],
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
		currentReservations: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Reservation",
			},
		],
		pastReservations: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "Reservation",
			},
		],
		role: {
			type: String,
			default: "guest",
		},
		verificationCode: {
			type: String,
			required: true,
		},
		accountIsVerified: {
			type: Boolean,
			default: false,
		},
		logInInterface: [{ date: Date }],
	},
	{ timestamps: true },
);

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);
UserModel.watch().once("change", (data: UserDocumenTypes) => {
	console.log(data);
});
export default UserModel;
