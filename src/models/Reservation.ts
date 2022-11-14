import mongoose from "mongoose";

const ReservationSchema = new mongoose.Schema(
	{
		createdDate: {
			type: Number,
			required: true,
		},
		roomId: {
			type: mongoose.Schema.Types.ObjectId,
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
			type: mongoose.Schema.Types.ObjectId,
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
	},
	{ timestamps: true },
);

const ReservationModel = mongoose.models.Reservation || mongoose.model("Reservation", ReservationSchema);
export default ReservationModel;
