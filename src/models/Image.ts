import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema(
	{
		name: {
			type: String,
		},
		description: {
			type: String,
		},
		fieldname: {
			type: String,
			unique: true,
		},
		originalname: {
			type: String,
		},
		mimetype: {
			type: String,
		},
		buffer: Buffer,
		filename: String,
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{ timestamps: true },
);

const ImageModel = mongoose.models.Image || mongoose.model("Image", ImageSchema);
export default ImageModel;
