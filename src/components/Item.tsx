import { Person } from "../models/Person";
import "../styles/Item.css";

export const Item = ({ ...person }: Person) => {
  return (
    <div className="person-item">
      <div className="person-header">
        <h5>
          {person.username.slice(0, 1).toUpperCase() +
            person.username.slice(1, person.username.length)}
        </h5>
      </div>
      <div className="person-body">
        <img src="https://picsum.photos/200/200?random=2" alt="" />
        <ul className="person-data">
          <li>Age : {person.age}</li>
          <li>Job : {person.job}</li>
        </ul>
      </div>
    </div>
  );
};
