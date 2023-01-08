import React from "react";
import "../styles/Table.css";

function Table() {
	return (
		<div>
			<br />
			<br />

			<h1
				style={{
					textAlign: "left",
					marginLeft: "60px",
					fontFamily: "Segoe UI",
					fontWeight: "700",
				}}
			>
				{" "}
				Generated Optimized Routes
			</h1>
			<table className="table">
				<tr>
					<th className="table-header">Truck ID</th>
					<th className="table-header">Optimized Path</th>
					<th className="table-header">Distance Covered</th>
				</tr>
				<tr className="table-row">
					<td className="table-cell">1</td>
					<td className="table-cell">B1 B4 B3 B2 </td>
					<td className="table-cell">17km</td>
				</tr>
				<tr className="table-row">
					<td className="table-cell">2</td>
					<td className="table-cell">B1 B2 B4 B3</td>
					<td className="table-cell">18km</td>
				</tr>
				<tr className="table-row">
					<td className="table-cell">3</td>
					<td className="table-cell">B1 B2 B3 B4 </td>
					<td className="table-cell">19km</td>
				</tr>
			</table>
		</div>
	);
}

export default Table;
