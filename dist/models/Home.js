"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var HomeSchema = new mongoose_1.default.Schema({
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
}, { timestamps: true });
var HomeModel = mongoose_1.default.models.Home || mongoose_1.default.model("Home", HomeSchema);
exports.default = HomeModel;
//# sourceMappingURL=Home.js.map