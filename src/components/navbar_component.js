import React from "react";
import "../styles/navbar_style.css";

function NavbarHeading(props) {
	return <div className="navbar-heading">{props.title}</div>;
}

function NavbarLogo(props) {
	return <img src={props.logoUrl} alt="logo" className="navbar-logo" />;
}

function NavbarOptions(props) {
	return (
		<ul className="navbar-options">
			<li
				className={
					props.selectedTab === "home"
						? "nav-item selected"
						: "nav-item"
				}
			>
				<a href="/">Home</a>
			</li>
			<li
				className={
					props.selectedTab === "about"
						? "nav-item selected"
						: "nav-item"
				}
			>
				<a href="/about">Trucks</a>
			</li>
			<li
				className={
					props.selectedTab === "contact"
						? "nav-item selected"
						: "nav-item"
				}
			>
				<a href="/contact">Bins</a>
			</li>
		</ul>
	);
}

function Navbar(props) {
	return (
		<div className="navbar">
			<NavbarHeading title={props.title} />

			<NavbarLogo logoUrl={props.logoUrl} />
			<NavbarOptions selectedTab={props.selectedTab} />
		</div>
	);
}

export default Navbar;
