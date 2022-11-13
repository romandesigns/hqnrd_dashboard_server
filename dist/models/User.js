"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
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
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "Reservation",
        },
    ],
    pastReservations: [
        {
            type: mongoose_1.default.Schema.Types.ObjectId,
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
}, { timestamps: true });
var UserModel = mongoose_1.default.models.User || mongoose_1.default.model("User", UserSchema);
UserModel.watch().once("change", function (data) {
    console.log(data);
});
exports.default = UserModel;
//# sourceMappingURL=User.js.map