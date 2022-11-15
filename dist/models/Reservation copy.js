"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var ReservationSchema = new mongoose_1.default.Schema({
    createdDate: {
        type: Number,
        required: true,
    },
    roomId: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "Room",
    },
    unit: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    adults: {
        type: Number,
        required: true,
    },
    infants: {
        type: Number,
        required: true,
    },
    reservationId: {
        type: String,
        required: true,
    },
    numberOfGuests: {
        type: Number,
        required: true,
    },
    accompanies: [{ name: String, group: String }],
    roomtype: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    reservationMessage: {
        type: String,
        trim: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    days: {
        type: Number,
        trim: true,
    },
    guest: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: "User",
    },
    fees: {
        discountPercentage: {
            type: Number,
            trim: true,
        },
        remaining: {
            amount: {
                type: Number,
                trim: true,
            },
            paid: {
                type: Boolean,
                default: false,
            },
        },
        totalWithDiscount: {
            amount: {
                type: Number,
                trim: true,
            },
            paid: {
                type: Boolean,
                default: false,
            },
        },
        depositeWithDiscount: {
            amount: {
                type: Number,
                trim: true,
            },
            paid: {
                type: Boolean,
                default: false,
            },
        },
        deposite: {
            amount: {
                type: Number,
                trim: true,
            },
            paid: {
                type: Boolean,
                default: false,
            },
        },
        total: {
            amount: {
                type: Number,
                trim: true,
            },
            paid: {
                type: Boolean,
                default: false,
            },
        },
    },
}, { timestamps: true });
var ReservationModel = mongoose_1.default.models.Reservation || mongoose_1.default.model("Reservation", ReservationSchema);
exports.default = ReservationModel;
//# sourceMappingURL=Reservation%20copy.js.map