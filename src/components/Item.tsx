import { Person } from "../models/Person";
import "../styles/Item.css";

export const Item = ({ ...person }: Person) => {
  return (
    <div className="person-item">
      <div className="person-header">
        <h5>
          {person.firstname} {person.lastname}
        </h5>
      </div>
      <div className="person-body">
        <img src={person.image} className="" />
        <ul className="person-data">
          <li>Age : {person.age}</li>
          <li>City : {person.address.city}</li>
        </ul>
      </div>
    </div>
  );
};
