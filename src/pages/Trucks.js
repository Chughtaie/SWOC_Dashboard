import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import "leaflet/dist/leaflet.css";

import Table from "../components/table_component";
import Header from "../components/header";
import TrucksTable from "../components/trucks_table";
import { useNavigate } from "react-router-dom";

function Trucks() {
	const navigate = useNavigate();

	const AddTruck = () => {
		navigate("/addtruck");
	};
	return (
		<div>
			<Header option="trucks" />
			<br />

			<br />
			<h1
				style={{
					textAlign: "center",
					fontFamily: "Segoe UI",
					fontWeight: "700",
				}}
			>
				Trucks List
			</h1>
			<TrucksTable />
			<br />

			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<button className="button-36" onClick={AddTruck}>
					Add Truck
				</button>
			</div>
		</div>
	);
}

export default Trucks;
