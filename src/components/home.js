import logo from "../logo.svg";
import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Routing from "../RoutingMachine";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "../components/navbar_component";
import { User, LatLng } from "../User";
import Table from "../components/table_component";
import MyMapContainer from "../components/mapcontainer_component";
import Header from "../components/header";
import "../styles/bootstrap.min.css";

const center = [33.6765861775585, 73.03936673659675];

const mark = new L.Icon({
	iconUrl: require("../bin.png"),
	iconRetinaUrl: require("../bin.png"),
	iconAnchor: null,
	popupAnchor: null,

	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(40, 55),
	className: "leaflet-div-iconn",
});
const truck = new L.Icon({
	iconUrl: require("../logo.png"),
	iconRetinaUrl: require("../logo.png"),
	iconAnchor: null,
	popupAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(105, 65),
	className: "leaflet-div-iconn",
});
const dump = new L.Icon({
	iconUrl: require("../dump.png"),
	iconRetinaUrl: require("../dump.png"),
	iconAnchor: null,
	popupAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(105, 65),
	className: "leaflet-div-iconn",
});

let binLocations1 = [
	new LatLng(33.67777003432862, 73.01396972440627),
	new LatLng(33.6765861775585, 73.04936673659675),
	new LatLng(33.67061547528435, 73.02524088532327),

	//   [33.643616586980076, 72.28377792894402],
];
let truckLocation1 = new LatLng(33.66754776310643, 73.0032501092188);
let dumpLocation1 = new LatLng(33.65587833607018, 73.01529982582935);

let binLocations2 = [
	new LatLng(33.643400669121654, 73.03819428134942),
	new LatLng(33.64739885700077, 73.04780135111022),
	new LatLng(33.65608413183324, 73.03894522856845),
	new LatLng(33.64996082749912, 73.02813687261715),
];
let truckLocation2 = new LatLng(33.64164914863834, 73.0133526510627);
let dumpLocation2 = new LatLng(33.650522482199285, 73.02063102703364);

let users = [
	new User(truckLocation1, binLocations1, dumpLocation1),
	new User(truckLocation2, binLocations2, dumpLocation2),
];

function Home() {
	const [volume, setVolume] = useState(1);
	const [volume2, setVolume2] = useState(1);
	const [muted, setMuted] = useState(false);
	const [muted2, setMuted2] = useState(false);

	const [routeStatus, setRouteStatus] = useState(false);
	const finalVolume = muted ? 0 : volume ** 1;
	const finalVolume2 = muted ? 0 : volume2 ** 1;
	const myRef = useRef(null);
	const [isVisible, setIsVisible] = useState(false);

	function handleClick() {
		setRouteStatus(!routeStatus);
		setIsVisible(!isVisible);

		if (!isVisible) window.scrollTo(0, document.body.scrollHeight);
	}

	const [message, setMessage] = useState("");
	var kl;

	useEffect(() => {
		fetch("http://localhost:5000/bindata")
			.then((res) => res.json())
			.then((data) => setMessage(data.message));
	}, []);

	// let jsonString = JSON.stringify(message);
	// const data = JSON.parse(jsonString);
	// data.forEach((user) => {
	// 	console.log(user.loc);
	// });
	return (
		<div>
			<div className="body">
				<div className="mapdiv">
					<MyMapContainer
						center={center}
						routeStatus={routeStatus}
						users={users}
						mark={mark}
						truck={truck}
						dump={dump}
					/>
				</div>
				<div className="outlined-div">
					<div className="buttons">
						<button className="button-36" onClick={handleClick}>
							Run Optimization
						</button>

						<div className="outlined-div2">
							<p
								style={{
									marginTop: "10px",

									color: "#ffff",
									fontStyle: "Bold",
									fontFamily: "Segoe UI",
								}}
							>
								Threshold
							</p>

							<input
								type="range"
								min={0}
								max={100}
								step={2}
								value={volume}
								onChange={(event) => {
									setVolume(event.target.valueAsNumber);
								}}
							/>
							{finalVolume.toFixed(1) + " %"}
						</div>
						<hr className="custom-line" />

						<div className="outlined-div2">
							<p
								style={{
									marginTop: "10px",
									color: "#ffff",
									fontStyle: "Bold",
									fontFamily: "Segoe UI",
								}}
							>
								Number of Bins
							</p>

							<input
								type="range"
								min={0}
								max={100}
								step={2}
								value={volume2}
								onChange={(event) => {
									setVolume2(event.target.valueAsNumber);
								}}
							/>
							{finalVolume2.toFixed(0)}
						</div>
					</div>
				</div>
			</div>
			<br />
			{isVisible && <Table />}
		</div>
	);
}

export default Home;
