import React from "react";
import "./styles/App.css";
import { Navbar } from "./components/Navbar";
import { List } from "./components/List";
import { Form } from "./components/Form";
import { Person } from "./models/Person";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    image: "https://picsum.photos/id/1062/250/200",
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
    image: "https://picsum.photos/id/1074/250/200",
    address: {
      city: "Bienne",
      street: "Hohlenweg",
      number: 18,
    },
  },
  {
    id: "3",
    lastname: "Doe",
    firstname: "Juliette",
    age: 2,
    dateOfBirth: new Date().toLocaleDateString(),
    image: "https://picsum.photos/id/1084/250/200",
    address: {
      city: "Bienne",
      street: "Hohlenweg",
      number: 18,
    },
  },
  {
    id: "4",
    lastname: "Carlos",
    firstname: "Hans",
    age: 70,
    dateOfBirth: new Date().toLocaleDateString(),
    image: "https://picsum.photos/id/200/250/200",
    address: {
      city: "Bienne",
      street: "Hohlenweg",
      number: 56,
    },
  },
  {
    id: "5",
    lastname: "Carlos",
    firstname: "Michelle",
    age: 42,
    dateOfBirth: new Date().toLocaleDateString(),
    image: "https://picsum.photos/id/1003/250/200",
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
      <Routes>
        <Route path="/" element={<List persons={personsList} />}></Route>
        <Route path="/person" element={<Form />}></Route>
      </Routes>
    </div>
  );
}

export default App;
