import { UserResponseInterface } from "../user";

export interface ResponseTypes {
	success: boolean;
	message: string;
	data: UserResponseInterface;
}
