import React, { useEffect } from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { Person } from "./models/Person";
import { Routes, Route } from "react-router-dom";

// Declaring constants
const title = "Personnes";

const App = () => {
	const [state, setState] = React.useState(false);
	const [persons, setPersons] = React.useState(null);

	useEffect(() => {
		async function fetchData() {
			// API url
			//const url = "https://randomuser.me/api/?results=5";
			const url = "http://localhost:9000/persons"
			// Async call to the API
			const response = await fetch(url);
			const data = await response.json();
			// Set state
			setState(true);
			// Set Persons
			setPersons(data);
		}
		fetchData();
	}, []);

	return (
		<div className="App">
			<Navbar title={title}></Navbar>
			<Routes>
				<Route
					path="/"
					element={<List persons={persons} state={state} />}
				></Route>
				<Route path="/person" element={<Form />}></Route>
			</Routes>
		</div>
	);
};

export default App;
