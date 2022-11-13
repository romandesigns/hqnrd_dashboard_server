export interface ReservationResponseInterface {
	data: ReservationInterface[];
	message: string;
	success: boolean;
}

export interface ReservationInterface {
	_id?: string;
	__v?: number;
	accompanies: AccompaniesInterface[];
	adults: number;
	infants: number;
	createdAt: String;
	createdDate: number;
	days: number;
	endDate: string;
	fees: Fees;
	guest: string;
	lastVisitedRoom?: string;
	numberOfGuests: number;
	roomtype: string;
	startDate: string;
	unit: number;
	unitPrice: number;
	updatedAt?: string;
	reservationId: string;
	reservationRequest?: string;
}

export interface Fees {
	discountPercentage: number;
	deposite: Deposite;
	depositeWithDiscount: Deposite;
	remaining: Deposite;
	total: Deposite;
	totalWithDiscount: Deposite;
}

export interface Deposite {
	amount: number;
	paid: boolean;
}

export interface AccompaniesInterface {
	name: string;
	group: string;
	_id?: string;
}

export interface ReservationItemHeaderInterface {
	infants: number;
	unit: number;
	roomtype: string;
	unitPrice: number;
	startDate: string;
	endDate: string;
	days: number;
	adults: number;
}
