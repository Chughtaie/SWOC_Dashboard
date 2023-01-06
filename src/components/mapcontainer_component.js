import "../App.css";
import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Routing from "../RoutingMachine";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "../components/navbar_component";
import { User, LatLng } from "../User";
import Table from "../components/table_component";
function MyMapContainer(props) {
	return (
		<MapContainer
			center={props.center}
			zoom={16}
			style={{ width: "200vw", height: "100vh" }}
		>
			<TileLayer
				url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=67tzsplQZ74XQ5pgVnPj"
				attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
			/>

			{props.routeStatus &&
				props.users.map((element) => {
					return element.routes.map((row, index) => {
						if (index < element.routes.length - 1)
							return (
								<Routing
									source={{
										lat: element.routes[index].lat,
										lng: element.routes[index].lng,
									}}
									destination={{
										lat: element.routes[index + 1].lat,
										lng: element.routes[index + 1].lng,
									}}
								/>
							);
					});
				})}
			{props.users.map((element) => {
				return element.binLocs.map((item) => {
					return (
						<Marker
							icon={props.mark}
							position={[item.lat, item.lng]}
							style="ba"
							className="leaflet-div-iconn"
						></Marker>
					);
				});
			})}

			{props.users.map((element) => {
				return (
					<Marker
						icon={props.truck}
						position={[element.truckLoc.lat, element.truckLoc.lng]}
						style="ba"
					></Marker>
				);
			})}
			{props.users.map((element) => {
				return (
					<Marker
						icon={props.dump}
						position={[element.dumpLoc.lat, element.dumpLoc.lng]}
						style="ba"
					></Marker>
				);
			})}
		</MapContainer>
	);
}

export default MyMapContainer;
