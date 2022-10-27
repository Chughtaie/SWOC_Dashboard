import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function BinsTable() {
	return (
		<div className="Trucks_page">
			<Navbar className="navv">
				<Container>
					Bins List
					<Nav>
						<div className="navb">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="./trucks">Trucks</Nav.Link>
							<Nav.Link href="./bins">Bins</Nav.Link>
						</div>
					</Nav>
				</Container>
			</Navbar>

			<br />

			<Table striped bordered hover>
				<thead>
					<tr>
						<th>ID#</th>
						<th>Name</th>
						<th>Location</th>
						<th>Latitude</th>
						<th>Longitude</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>XYZ</td>
						<td>E11</td>
						<td>50.76</td>
						<td>78.33</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>1</td>
						<td>XYZ</td>
						<td>E11</td>
						<td>50.76</td>
						<td>78.33</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>1</td>
						<td>XYZ</td>
						<td>E11</td>
						<td>50.76</td>
						<td>78.33</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>1</td>
						<td>XYZ</td>
						<td>E11</td>
						<td>50.76</td>
						<td>78.33</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>1</td>
						<td>XYZ</td>
						<td>E11</td>
						<td>50.76</td>
						<td>78.33</td>
						<td>@mdo</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}

export default BinsTable;
