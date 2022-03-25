import { Person } from "../models/Person";
import { Item } from "./Item";
import "../styles/List.css";
import { Loading } from "./Loading";

export const List = ({
	persons,
	state,
}: {
	persons: Person[] | null;
	state: boolean;
}) => {
	return (
		<>
			{state && persons ? (
				<div className="list-persons">
					{persons.map((person: Person) => {
						return <Item key={person.id} {...person}></Item>;
					})}
				</div>
			) : (
				<Loading />
			)}
		</>
	);
};
