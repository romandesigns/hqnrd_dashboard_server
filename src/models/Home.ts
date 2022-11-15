import mongoose from "mongoose";

const HomeSchema = new mongoose.Schema(
	{
		banner: [{ img_src: String, title: String, description: String }],
		discount: {
			sectionTile: String,
			percentage: [{ title: String, percentage: Number, description: String }],
			features: [{ title: String, description: String }],
			gallery_first: [{ img_src: String, title: String, description: String }],
			gallery_second: [{ img_src: String, title: String, description: String }],
			gallery_third: [{ img_src: String, title: String, description: String }],
		},
		category: {
			sectionTile: String,
			categories: [{ title: String, description: String, img_src: String }],
		},
		accomodations: {
			sectionTile: String,
			mainHeading: String,
			mainHeadingdescription: String,
			subHeading: String,
			subHeadingdescription: String,
			postSubHeading: String,
			postSubHeadingItems: [{ key: String, value: String }],
		},
		trending: {
			sectionTile: String,
		},
	},
	{ timestamps: true },
);

const HomeModel = mongoose.models.Home || mongoose.model("Home", HomeSchema);
export default HomeModel;
