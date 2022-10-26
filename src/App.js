import logo from "./logo.svg";
import "./App.css";
import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Routing from "./RoutingMachine";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Table from "react-bootstrap/Table";

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

const binLocations = [
	[33.6765861775585, 73.03936673659675],
	[33.67777003432862, 73.01396972440627],
	[33.65061547528435, 73.02524088532327],
	[33.64783561289653, 72.95331076988744],
	[33.66839027456748, 73.07530059035655],
	//   [33.643616586980076, 72.28377792894402],
];
const truckLocations = [33.66754776310643, 73.0032501092188];
const routes = [truckLocations].concat(binLocations);
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

function handleClick() {
	alert("Hello!");
}

function App() {
	const [volume, setVolume] = useState(1);
	const [muted, setMuted] = useState(false);

	const finalVolume = muted ? 0 : volume ** 1;
	return (
		<div className="App">
			<Navbar className="navv">
				<Container>
					SWOC Dashboard
					<Nav>
						<div className="navb">
							<Nav.Link href="#home">Trucks</Nav.Link>
							<Nav.Link href="#features">Bins</Nav.Link>
							<Nav.Link href="#pricing">Home</Nav.Link>
						</div>
					</Nav>
				</Container>
			</Navbar>

			<br />

			<div className="body">
				<MapContainer
					center={center}
					zoom={16}
					style={{ width: "200vw", height: "100vh" }}
				>
					<TileLayer
						url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=67tzsplQZ74XQ5pgVnPj"
						attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
					/>

					{routes.map((row, index) => {
						if (index < routes.length - 1)
							return (
								<Routing
									source={{
										lat: routes[index][0],
										lng: routes[index][1],
									}}
									destination={{
										lat: routes[index + 1][0],
										lng: routes[index + 1][1],
									}}
								/>
							);
					})}
					{binLocations.map((item) => {
						return (
							<Marker
								icon={mark}
								position={[item[0], item[1]]}
								style="ba"
								className="leaflet-div-iconn"
							></Marker>
						);
					})}
					{
						<Marker
							icon={truck}
							position={truckLocations}
							style="ba"
						></Marker>
					}
				</MapContainer>

				<div className="buttons">
					<button className="button-36" onClick={handleClick}>
						Run Optimization
					</button>
					<br />
					<p
						style={{
							color: "#ffff",
							fontStyle: "Bold",
							fontFamily: "Arial",
						}}
					>
						Set Threshold
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
					{finalVolume.toFixed(1)}
				</div>
			</div>
			<div className="table">
				<Table>
					<thead>
						<tr>
							<th>Truck ID #</th>
							<th>Optimized Path</th>
							<th>Distance</th>
							<th>Details</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>12394</td>
							<td>20</td>
							<td>Details</td>
						</tr>
						<tr>
							<td>2</td>
							<td>12394</td>
							<td>20</td>
							<td>Details</td>
						</tr>

						<tr>
							<td>3</td>
							<td>12394</td>
							<td>20</td>
							<td>Details</td>
						</tr>
					</tbody>
				</Table>
			</div>
			<div> .</div>
		</div>
	);
}

export default App;

/*
import React, {useState,useRef} from "react";import logo from "./logo.svg";import "./App.css";import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';import 'leaflet/dist/leaflet.css';import marks from "./binLocations.svg";import L from 'leaflet';// import { statesData } from './data';const center = [33.6765861775585, 73.03936673659675];function App() {const mark = new L.Icon({iconUrl: require('./bin.png'),iconRetinaUrl: require('./bin.png'),iconAnchor: null,popupAnchor: null,shadowUrl: null,shadowSize: null,shadowAnchor: null,iconSize: new L.Point(60, 75),className: 'leaflet-div-icon'});//mark.valueOf()._icon.style.backgroundColor = 'transparent';const binLocations = [[33.6765861775585, 73.03936673659675],[33.67777003432862, 73.01396972440627],[33.65061547528435, 73.02524088532327],[33.64783561289653, 72.95331076988744],[33.843616586980076, 72.28377792894402]];return ( <MapContainercenter={center}zoom={16}style={{ width: '100vw', height: '100vh' }}><TileLayerurl="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=67tzsplQZ74XQ5pgVnPj"attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'/>{binLocations.map(item => {return (<Marker icon={mark} position={[item[0], item[1]]} style='ba'>{ {item.title && <Popup><span>{item.title}</span></Popup>} }</Marker>)})}<Marker position={[33.67777003432862, 73.01396972440627]} icon = {mark}><Popup>A pretty CSS3 popup. <br /> Easily customizable.</Popup>{/* icon={ iconPerson } }</Marker>{ {points.map((point) => (<Markerposition={[point[1],point[0]]}icon={Icon.point}><Popup>{'Bin'}</Popup></Marker>))} n}</MapContainer>);// const zoom = 9;// const [center,setCenter] = useState({lat:13.999,long:15.785});// const mapRef = useRef();// return (// <div className="App">// <div className="navbar">// <img src={logo} alt="logo" />// <text> Admin Dashboard</text>// </div>// <div className="body">// <div className="list" >// <ol>// <li>Private Contractor 1</li>// <li>Official Contractor 1</li>// <li>Private Contractor 2</li>// </ol>// </div>// <div > <iframe width="1500" height="700" src="https://api.maptiler.com/maps/outdoor/?key=67tzsplQZ74XQ5pgVnPj#-0.2/0.00000/32.34375"></iframe>// </div>// <div className="buttons">// <button className="button-36">Run Optimization</button>// <button className="button-36">Set Threshold</button>// </div>// </div>// </div>// );}export default App;
*/
