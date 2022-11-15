import { Request, Response } from "express";
import { HomeModel } from "../models";
import validateObjectId from "../utils/validateId";

// @route   GET api/reservations
const getAll = async (_req: Request, res: Response) => {
	try {
		const home = await HomeModel.find({});
		if (!home) return res.status(200).json({ success: true, message: "No Data found", data: {} });
		return res.status(200).json({ success: true, message: "", data: home.length ? home[0] : {} });
	} catch ({ message }) {
		return res.status(500).json({ message });
	}
};

// Get a reservation
const get = async (req: Request, res: Response) => {
	try {
		if (!validateObjectId(req.params.id)) {
			return res.status(400).json({ success: false, message: "reservation ID is not valid", data: "" });
		}
		const home = await HomeModel.findOne({ _id: req.params.id }).populate("accompanies").populate("guest", "-password");
		if (!home) return res.status(200).json({ success: true, message: "No reservation found", data: "" });
		return res.status(200).json({ success: true, message: "", data: home });
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
		const home = await HomeModel.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }).populate("accompanies").populate("guest", "-password");
		if (!home) return res.status(200).json({ success: true, message: "No home found", data: "" });
		return res.status(200).json({ success: true, message: "Home ha sido actualizada", data: home });
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
		const home = await HomeModel.findOneAndDelete({ _id: req.params.id });
		if (!home) return res.status(200).json({ success: true, message: "No home found", data: "" });
		return res.status(200).json({ success: true, message: "Home has been deleted", data: home });
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
