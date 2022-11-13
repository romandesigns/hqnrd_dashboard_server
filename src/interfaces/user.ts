import { ReservationInterface } from "../interfaces";

export interface UserResponseInterface {
	_id: string;
	dob: string;
	email: string;
	lastName: string;
	name: string;
	password: string;
	phone: string;
	profile: string;
	identification: string;
	role: string;
	createdAt: Date;
	updatedAt: Date;
}

export interface UserInputsInterface {
	name: string;
	lastName: string;
	dob: string;
	phone: string;
	email: string;
	password: string;
	confirmPassword: string;
	identification: string;
	profile: string;
}

export interface UserDocumentInterface {
	data: UserInterface[];
	message: string;
	success: boolean;
}

export interface UserInterface {
	logInInterface: LogInInterface[];
	__v?: number;
	_id: string;
	accountIsVerified: boolean;
	createdAt: string;
	dob?: string;
	email: string;
	identification: string;
	lastName: string;
	name: string;
	password: string;
	phone: string;
	profile: string;
	currentReservations: ReservationInterface[];
	pastReservations: ReservationInterface[];
	role: string;
	updatedAt: string;
	verificationCode: string;
	identificationType: string;
}

export interface LogInInterface {
	_id: string;
	date: string;
}
