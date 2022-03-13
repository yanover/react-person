import logo from "../public/medias/logo.svg";
import "../styles/navbar.css";

export const Navbar = ({ title }: { title: string }) => {
	return (
		<div className="navbar">
			<img src={logo} className="logo" alt="logo" />
			<h2 className="title">{title}</h2>
		</div>
	);
};
