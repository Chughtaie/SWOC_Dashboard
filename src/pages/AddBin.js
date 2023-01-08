import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import "leaflet/dist/leaflet.css";

import Table from "../components/table_component";
import Header from "../components/header";
import "../styles/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function AddBin() {
	const navigate = useNavigate();

	const Homepage = () => {
		navigate("/homepage");
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
				New Bin Registration
			</h1>
			<br />

			<div className="outlined-div3">
				{" "}
				<div class="field padding-bottom--24">
					<label
						style={{
							fontWeight: "500",
							fontSize: "25px",
							fontFamily: "Segoe UI",
							marginLeft: "40px",
						}}
					>
						Capacity
					</label>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<input placeholder="Capacity in Litres"></input>
					</div>

					<br />
					<label
						style={{
							fontWeight: "500",
							fontSize: "25px",
							fontFamily: "Segoe UI",
							marginLeft: "40px",
						}}
					>
						Location
					</label>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<input placeholder="Location/Sector"></input>
					</div>

					<br />
					<label
						style={{
							fontWeight: "500",
							fontSize: "25px",
							fontFamily: "Segoe UI",
							marginLeft: "40px",
						}}
					>
						Latitude
					</label>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<input placeholder="0.000000000"></input>
					</div>

					<br />
					<label
						style={{
							fontWeight: "500",
							fontSize: "25px",
							fontFamily: "Segoe UI",
							marginLeft: "40px",
						}}
					>
						Longitude
					</label>
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<input placeholder="0.00000000"></input>
					</div>
				</div>
				<br />
				<div
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<button className="button-362" onClick={Homepage}>
						Add Bin
					</button>
				</div>
			</div>
		</div>
	);
}

export default AddBin;
