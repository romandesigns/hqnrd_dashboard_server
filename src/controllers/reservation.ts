import { Request, Response } from "express";
import { ReservationModel } from "../models";
import validateObjectId from "../utils/validateId";

// @route   GET api/reservations
const getAll = async (_req: Request, res: Response) => {
	try {
		const reservations = await ReservationModel.find({}).populate("accompanies").populate("guest", "-password");
		if (!reservations.length) return res.status(200).json({ success: true, message: "No reservations found", data: [] });
		return res.status(200).json({ success: true, message: "", data: reservations });
	} catch ({ message }) {
		return res.status(500).json({ message });
	}
};

// Get a reservation
const get = async (req: Request, res: Response) => {
	console.log(req.params.id);
	try {
		if (!validateObjectId(req.params.id)) {
			return res.status(400).json({ success: false, message: "reservation ID is not valid", data: "" });
		}
		const reservation = await ReservationModel.findOne({ _id: req.params.id }).populate("accompanies").populate("guest", "-password");
		if (!reservation) return res.status(200).json({ success: true, message: "No reservation found", data: "" });
		return res.status(200).json({ success: true, message: "", data: reservation });
	} catch ({ message }) {
		return res.status(500).json({ success: false, message: "Error found", data: message });
	}
};

// Update reservation
const update = async (req: Request, res: Response) => {
	try {
		if (!validateObjectId(req.params.id)) {
			return res.status(400).json({ success: false, message: "reservation ID is not valid", data: "" });
		}
		const reservation = await ReservationModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
			.populate("accompanies")
			.populate("guest", "-password");
		if (!reservation) return res.status(200).json({ success: true, message: "No reservation found", data: "" });
		return res.status(200).json({ success: true, message: "Reservation ha sido actualizada", data: reservation });
	} catch ({ message }) {
		return res.status(500).json({ success: false, message: "Error found", data: message });
	}
};

// Delete a reservation
const eliminate = async (req: Request, res: Response) => {
	try {
		if (!validateObjectId(req.params.id)) {
			return res.status(400).json({ success: false, message: "Reservation ID is not valid", data: "" });
		}
		const reservation = await ReservationModel.findOneAndDelete({ _id: req.params.id });
		if (!reservation) return res.status(200).json({ success: true, message: "No reservation found", data: "" });
		return res.status(200).json({ success: true, message: "Reservation has been deleted", data: reservation });
	} catch ({ message }) {
		return res.status(500).json({ success: false, message: "Error found", data: message });
	}
};

export default {
	getAll,
	get,
	update,
	eliminate,
};
