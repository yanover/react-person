import logo from "../public/medias/logo.svg";
import "../styles/Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = ({ title }: any) => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <h2 className="title">{title}</h2>
      <Link className="route-link" to="person">
        New
      </Link>
    </div>
  );
};
