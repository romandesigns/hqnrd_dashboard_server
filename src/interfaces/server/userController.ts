export interface postUserBody {
	body: postUserTypes;
	files: userFileInterface[];
}

export interface userFileInterface {
	fieldname: string;
	originalname: string;
	encoding: string;
	mimetype: string;
	buffer: Buffer;
	size: number;
}

export interface postUserTypes {
	name: string;
	lastName: string;
	dob: string;
	phone: string;
	email: string;
	password: string;
	profile: userFileInterface;
	identification: userFileInterface;
}

export interface createResponseTypes {
	__v: number;
	_id: string;
	createdAt: Date;
	dob: string;
	email: string;
	lastName: string;
	name: string;
	password: string;
	phone: string;
	role: string;
	profile: string;
	identification: string;
	updatedAt: Date;
	save: any;
}

export interface singInCredentialsTypes {
	email: string;
	password: string;
}

export interface RoomTypes {
	_id?: string;
	unit: number;
	price: number;
	roomtype: string;
	card_description: string;
	card_image: string;
	capacity: number;
	features: {
		wifi: boolean;
		cocineta: boolean;
		air_conditioner: boolean;
		smart_tv: boolean;
		intercom: boolean;
		tv_nextflix_ready: boolean;
		tv_youtube_ready: boolean;
		water_hot_and_cold: boolean;
		electronic_key: boolean;
		refrigerator: boolean;
		ceiling_fan: boolean;
		balcony: boolean;
	};
	diagrama: string;
	page_description: string;
	rooftop_access: boolean;
	private_bathroom: boolean;
	bed_quantity: number;
	sofa_bed: boolean;
	parking: boolean;
	surveillance_camera: boolean;
	reservations: {
		past: [string];
		current: [string];
	};
}
