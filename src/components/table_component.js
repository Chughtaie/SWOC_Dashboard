import React from "react";
import "../styles/Table.css";

function Table() {
	return (
		<table className="table">
			<tr>
				<th className="table-header">Vehicle</th>
				<th className="table-header">Optimized Path</th>
				<th className="table-header">Distance Covered</th>
			</tr>
			<tr className="table-row">
				<td className="table-cell">Row 1, Column 1</td>
				<td className="table-cell">Row 1, Column 2</td>
				<td className="table-cell">Row 1, Column 3</td>
			</tr>
			<tr className="table-row">
				<td className="table-cell">Row 2, Column 1</td>
				<td className="table-cell">Row 2, Column 2</td>
				<td className="table-cell">Row 2, Column 3</td>
			</tr>
			<tr className="table-row">
				<td className="table-cell">Row 2, Column 1</td>
				<td className="table-cell">Row 2, Column 2</td>
				<td className="table-cell">Row 2, Column 3</td>
			</tr>
		</table>
	);
}

export default Table;
