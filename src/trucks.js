import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function TrucksTable() {
	return (
		<div className="Trucks_page">
			<Navbar className="navv">
				<Container>
					Trucks List
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
						<th>Status</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>XYZ-123</td>
						<td>50T</td>
						<td>Operational</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>XYZ-123</td>
						<td>50T</td>
						<td>Operational</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>XYZ-123</td>
						<td>50T</td>
						<td>Operational</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>XYZ-123</td>
						<td>50T</td>
						<td>Operational</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>XYZ-123</td>
						<td>50T</td>
						<td>Operational</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>XYZ-123</td>
						<td>50T</td>
						<td>Operational</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>XYZ-123</td>
						<td>50T</td>
						<td>Operational</td>
						<td>@mdo</td>
					</tr>
					<tr>
						<td>XYZ-123</td>
						<td>50T</td>
						<td>Operational</td>
						<td>@mdo</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}

export default TrucksTable;
