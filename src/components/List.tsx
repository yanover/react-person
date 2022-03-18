import { Person } from "../models/Person";
import { Item } from "./Item";
import "../styles/List.css";

export const List = ({ persons }: any) => {
  return (
    <div className="list-persons">
      {persons.map((person: Person) => {
        return <Item key={person.id} {...person}></Item>;
      })}
    </div>
  );
};
