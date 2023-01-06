import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Routing from "./RoutingMachine";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "./components/navbar_component";
import { User, LatLng } from "./User";
import Table from "./components/table_component";
import MyMapContainer from "./components/mapcontainer_component";

const center = [33.6765861775585, 73.03936673659675];

const mark = new L.Icon({
	iconUrl: require("./bin.png"),
	iconRetinaUrl: require("./bin.png"),
	iconAnchor: null,
	popupAnchor: null,

	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(40, 55),
	className: "leaflet-div-iconn",
});
const truck = new L.Icon({
	iconUrl: require("./logo.png"),
	iconRetinaUrl: require("./logo.png"),
	iconAnchor: null,
	popupAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(105, 65),
	className: "leaflet-div-iconn",
});
const dump = new L.Icon({
	iconUrl: require("./dump.png"),
	iconRetinaUrl: require("./dump.png"),
	iconAnchor: null,
	popupAnchor: null,
	shadowUrl: null,
	shadowSize: null,
	shadowAnchor: null,
	iconSize: new L.Point(105, 65),
	className: "leaflet-div-iconn",
});

let binLocations = [
	[33.6765861775585, 73.03936673659675],
	[33.67777003432862, 73.01396972440627],
	[33.65061547528435, 73.02524088532327],
	[33.64783561289653, 72.95331076988744],
	[33.66839027456748, 73.07530059035655],
	//   [33.643616586980076, 72.28377792894402],
];
const truckLocation = [33.66754776310643, 73.0032501092188];
const routes = [truckLocation].concat(binLocations);

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

function App() {
	const [volume, setVolume] = useState(1);
	const [volume2, setVolume2] = useState(1);
	const [muted, setMuted] = useState(false);
	const [muted2, setMuted2] = useState(false);

	const [routeStatus, setRouteStatus] = useState(false);
	const finalVolume = muted ? 0 : volume ** 1;
	const finalVolume2 = muted ? 0 : volume2 ** 1;
	function handleClick() {
		setRouteStatus(!routeStatus);
	}

	return (
		<div className="App">
			{/* <div class="bg-green-800">
			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">SWOC</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav">
					<a class="nav-item nav-link active" href="#">Trucks <span class="sr-only">(current)</span></a>
					<a class="nav-item nav-link" href="#">Bins</a>
					</div>
				</div>
			</nav>
			</div> */}

			<br />

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
									color: "#ffff",
									fontStyle: "Bold",
									fontFamily: "Arial",
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
									color: "#ffff",
									fontStyle: "Bold",
									fontFamily: "Arial",
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
			<div>
				<Table />
			</div>
			<div> .</div>
		</div>
	);
}

export default App;

/*
import React, {useState,useRef} from "react";import logo from "./logo.svg";import "./App.css";import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';import 'leaflet/dist/leaflet.css';import marks from "./binLocations.svg";import L from 'leaflet';// import { statesData } from './data';const center = [33.6765861775585, 73.03936673659675];function App() {const mark = new L.Icon({iconUrl: require('./bin.png'),iconRetinaUrl: require('./bin.png'),iconAnchor: null,popupAnchor: null,shadowUrl: null,shadowSize: null,shadowAnchor: null,iconSize: new L.Point(60, 75),className: 'leaflet-div-icon'});//mark.valueOf()._icon.style.backgroundColor = 'transparent';const binLocations = [[33.6765861775585, 73.03936673659675],[33.67777003432862, 73.01396972440627],[33.65061547528435, 73.02524088532327],[33.64783561289653, 72.95331076988744],[33.843616586980076, 72.28377792894402]];return ( <MapContainercenter={center}zoom={16}style={{ width: '100vw', height: '100vh' }}><TileLayerurl="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=67tzsplQZ74XQ5pgVnPj"attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'/>{binLocations.map(item => {return (<Marker icon={mark} position={[item[0], item[1]]} style='ba'>{ {item.title && <Popup><span>{item.title}</span></Popup>} }</Marker>)})}<Marker position={[33.67777003432862, 73.01396972440627]} icon = {mark}><Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>{/* icon={ iconPerson } }</Marker>{ {points.map((point) => (<Markerposition={[point[1],point[0]]}icon={Icon.point}><Popup>{'Bin'}</Popup></Marker>))} n}</MapContainer>);// const zoom = 9;// const [center,setCenter] = useState({lat:13.999,long:15.785});// const mapRef = useRef();// return (// <div className="App">// <div className="navbar">// <img src={logo} alt="logo" />// <text> Admin Dashboard</text>// </div>// <div className="body">// <div className="list" >// <ol>// <li>Private Contractor 1</li>// <li>Official Contractor 1</li>// <li>Private Contractor 2</li>// </ol>// </div>// <div > <iframe width="1500" height="700" src="https://api.maptiler.com/maps/outdoor/?key=67tzsplQZ74XQ5pgVnPj#-0.2/0.00000/32.34375"></iframe>// </div>// <div className="buttons">// <button className="button-36">Run Optimization</button>// <button className="button-36">Set Threshold</button>// </div>// </div>// </div>// );}export default App;
*/
