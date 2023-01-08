import React from "react";
// import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
// import App from "../App";
import { useNavigate } from "react-router-dom";

import {
	MDBBtn,
	MDBContainer,
	MDBRow,
	MDBCol,
	MDBInput,
} from "mdb-react-ui-kit";
import "../App.css";
import logoo from "../components/logo.png";

function Login() {
	const navigate = useNavigate();

	const Signin = () => {
		navigate("/homepage");
	};

	return (
		<MDBContainer className="mdbcontainer">
			<MDBRow>
				<MDBCol col="6" className="mb-5">
					<div className="left-login">
						<div className="text-heading">
							<br />
							Smart Waste Optimized Collection
						</div>
						<br />
						<br />
						<p>Please login to your account</p>

						<MDBInput
							wrapperClass="mb-4"
							label="UserName"
							id="form1"
							type="email"
						/>
						<MDBInput
							wrapperClass="mb-4"
							label="Password"
							id="form2"
							type="password"
						/>

						<div className="text-center pt-1 mb-5 pb-1">
							<button className="signin-button" onClick={Signin}>
								Sign in
							</button>
							{/* <Route path="/App" element={<App />} /> */}
							<br />
							<br />
							<a className="text-muted" href="#!">
								Forgot password?
							</a>
						</div>
					</div>
				</MDBCol>

				<MDBCol col="6" className="mb-5">
					<div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
						<div className="text-white px-3 py-4 p-md-5 mx-md-4">
							<div className="text-center">
								<img
									src={logoo}
									style={{ width: "300px" }}
									alt="logo"
								/>
							</div>
							<br />
							<p class="small mb-0">
								Welcome to the revolutionary cost optimized
								waste collection
							</p>
						</div>
					</div>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
	);
}

export default Login;
