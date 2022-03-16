import { Person } from "../models/Person";

export const List = ({ persons }: any) => {
	return (
		<div className="list-persons">
			<ul>
				{persons.map((person: Person) => {
					return <li key={person.id}>{person.lastname}</li>;
				})}
			</ul>
		</div>
	);
};
