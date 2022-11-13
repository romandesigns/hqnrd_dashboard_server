"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var RoomSchema = new mongoose_1.default.Schema({
    unit: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    roomtype: {
        type: String,
        required: true,
    },
    card_description: {
        type: String,
        maxlength: 80,
        minlength: 10,
        required: [true, "Card description cannot be less than 10 characters long or more than 80 characters long"],
        trim: true,
    },
    card_image: {
        type: String,
        trim: true,
    },
    capacity: {
        type: Number,
        required: true,
    },
    features: {
        wifi: {
            type: Boolean,
            required: true,
        },
        cocineta: {
            type: Boolean,
            required: true,
        },
        air_conditioner: {
            type: Boolean,
            required: true,
        },
        smart_tv: {
            type: Boolean,
            required: true,
        },
        intercom: {
            type: Boolean,
            required: true,
        },
        tv_nextflix_ready: {
            type: Boolean,
            required: true,
        },
        tv_youtube_ready: {
            type: Boolean,
            required: true,
        },
        water_hot_and_cold: {
            type: Boolean,
            required: true,
        },
        electronic_key: {
            type: Boolean,
            required: true,
        },
        refrigerator: {
            type: Boolean,
            required: true,
        },
        microwave: {
            type: Boolean,
            required: true,
        },
        ceiling_fan: {
            type: Boolean,
            required: true,
        },
        balcony: {
            type: Boolean,
            required: true,
        },
    },
    diagram: {
        type: String,
        maxlength: 80,
        minlength: 10,
        trim: true,
    },
    page_description: {
        type: String,
        maxlength: 366,
        minlength: 100,
        required: [true, "Card description cannot be less than 10 characters long or more than 80 characters long"],
        trim: true,
    },
    rooftop_access: {
        type: Boolean,
        required: true,
    },
    private_bathroom: {
        type: Boolean,
        required: true,
    },
    bed_quantity: {
        type: Number,
        required: true,
    },
    sofa_bed: {
        type: Boolean,
        required: true,
    },
    parking: {
        type: Boolean,
        required: true,
    },
    surveillance_camera: {
        type: Boolean,
        required: true,
    },
    currentReservations: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Reservation" }],
    pastReservations: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: "Reservation" }],
}, { timestamps: true });
var RoomModel = mongoose_1.default.models.Room || mongoose_1.default.model("Room", RoomSchema);
exports.default = RoomModel;
//# sourceMappingURL=Room.js.map