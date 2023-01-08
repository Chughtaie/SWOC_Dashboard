import React, { useEffect, useState, useRef } from "react";
import "../styles/Table.css";

function BinsTable() {
	const [message, setMessage] = useState("");
	var kl;

	useEffect(() => {
		fetch("http://localhost:9000/bindata")
			.then((res) => res.json())
			.then((data) => setMessage(data.message));
	}, []);

	return (
		<table className="table">
			<tr>
				<th className="table-header">Bin Id</th>
				<th className="table-header">Location</th>
				<th className="table-header">Capacity</th>
				<th colspan="2" className="table-header">
					Coordinates
				</th>
				<th className="table-header">Assigned</th>
			</tr>
			{message &&
				message.map((user) => (
					<tr className="table-row">
						<td className="table-cell">{user._id}</td>
						<td className="table-cell">{user.loc}</td>
						<td className="table-cell">{user.capacity}</td>
						<td className="table-cell">{user.lat}</td>
						<td className="table-cell">{user.long} </td>

						<td className="table-cell">
							{user.assinged == 1 ? "Yes" : "No"}
						</td>
					</tr>
				))}
		</table>
	);
}

export default BinsTable;
