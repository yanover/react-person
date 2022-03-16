import { Address } from "./Address";

export interface Person {
	id: string;
	lastname: string;
	firstname: string;
	age: number;
	dateOfBirth: string;
	address: Address;
}
