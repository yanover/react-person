import { Person } from "../models/Person";
import "../styles/Item.css";

export const Item = ({ ...person }: Person) => {
	return (
		<div className="person-item">
			<div className="person-header">
				<h5>
					{person.name.first} {person.name.last}
				</h5>
			</div>
			<div className="person-body">
				<img src={person.picture.large} alt="" />
				<ul className="person-data">
					<li>Age : {person.dob.age}</li>
					<li>City : {person.location.city}</li>
				</ul>
			</div>
		</div>
	);
};
