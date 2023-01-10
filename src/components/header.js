import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import logoo from "../logo.png";
function Header(props) {
	const navigate = useNavigate();
	const Trucks = () => {
		navigate("/trucks");
	};
	const Bins = () => {
		navigate("/bins");
	};

	const Home = () => {
		navigate("/homepage");
	};
	const backlogin = () => {
		navigate("/");
	};

	return (
		<Navbar
			style={{
				backgroundColor: "#395254",
				boxShadow: "0 4px 6px rgba(0, 0, 0, 0.5)",
			}}
			expand="lg"
		>
			<Navbar.Brand
				href="#"
				style={{ fontFamily: "Ubuntu", color: "#FFFFFF" }}
			>
				{/* <img
					src="./evote6.png"
					alt="Logo"
					width="30"
					height="20"
					class="d-inline-block align-text-top"
				/> */}

				<h1 style={{ marginLeft: "5rem" }}>SWOC</h1>
			</Navbar.Brand>
			<Navbar.Toggle variant="dark" aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="ml-auto">
					<Nav.Link
						active={props.option === "home"}
						href="#"
						onClick={Home}
						style={{
							marginRight: "5rem",
							fontFamily: "Segoe UI",
							color: "white",
							fontWeight: "500",
						}}
					>
						Home
					</Nav.Link>
					<Nav.Link
						active={props.option === "trucks"}
						href="#"
						onClick={Trucks}
						style={{
							marginRight: "5rem",
							fontFamily: "Segoe UI",
							color: "white",

							fontWeight: "500",
						}}
					>
						Trucks
					</Nav.Link>
					<Nav.Link
						active={props.option === "bins"}
						href="#"
						onClick={Bins}
						style={{
							marginRight: "5rem",
							fontFamily: "Segoe UI",
							color: "white",

							fontWeight: "500",
						}}
					>
						Bins
					</Nav.Link>

					<Nav.Link
						active={props.option === "bins"}
						href="#"
						onClick={backlogin}
						style={{
							marginRight: "5rem",
							fontFamily: "Segoe UI",
							color: "white",

							fontWeight: "800",
						}}
					>
						SignOut
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}

export default Header;
