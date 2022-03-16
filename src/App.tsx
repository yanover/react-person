import React from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar";
import { List } from "./components/List";
import { Person } from "./models/Person";

// Declaring constants
const title = "Personnes";

// temporary implementation
const personsList: Person[] = [
	{
		id: "1",
		lastname: "Doe",
		firstname: "John",
		age: 25,
		dateOfBirth: new Date().toLocaleDateString(),
		address: {
			city: "Bienne",
			street: "Hohlenweg",
			number: 18,
		},
	},
	{
		id: "2",
		lastname: "Doe",
		firstname: "Jane",
		age: 23,
		dateOfBirth: new Date().toLocaleDateString(),
		address: {
			city: "Bienne",
			street: "Hohlenweg",
			number: 18,
		},
	},
];

function App() {
	return (
		<div className="App">
			<Navbar title={title}></Navbar>
			<List persons={personsList}></List>
		</div>
	);
}

export default App;
