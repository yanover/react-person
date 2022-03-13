import React from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";

// Declaring constants
const title = "Personnes"

function App() {


	return (
		<div className="App">
			<Navbar title={title}></Navbar>
			<Form></Form>
		</div>
	);
}

export default App;
