import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import "leaflet/dist/leaflet.css";

import Table from "../components/table_component";
import Header from "../components/header";
import "../styles/bootstrap.min.css";
import BinsTable from "../components/bins_table";
import { useNavigate } from "react-router-dom";

function Bins() {
	const navigate = useNavigate();

	const AddBin = () => {
		navigate("/addbin");
	};
	return (
		<div>
			<Header option="bins" />
			<br />

			<br />
			<h1
				style={{
					textAlign: "center",
					fontFamily: "Segoe UI",
					fontWeight: "700",
				}}
			>
				Bins List
			</h1>
			<BinsTable />
			<br />

			<div
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<button className="button-36" onClick={AddBin}>
					Add Bin
				</button>
			</div>
		</div>
	);
}

export default Bins;
