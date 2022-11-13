import { ReservationInterface } from "../interfaces";
// Language: typescript

export interface RoomResponseInterface {
	data: RoomInterface[];
	message: string;
	success: boolean;
}

export interface RoomInterface {
	_id: string;
	bed_quantity: number;
	capacity: number;
	card_description: string;
	card_image: string;
	currentReservations: ReservationInterface[];
	diagram: string;
	dining_area: boolean;
	features: { [key: string]: boolean };
	isAvailable: boolean;
	loaudry_area?: boolean;
	og_image?: string;
	og_img?: string;
	page_description: string;
	parking: boolean;
	pastReservations: ReservationInterface[];
	price: number;
	private_bathroom: boolean;
	rooftop_access: boolean;
	room?: number;
	rooms?: number;
	roomtype: string;
	sofa_bed: boolean;
	surveillance_camera: boolean;
	unit: number;
}
