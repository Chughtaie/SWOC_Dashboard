import "../App.css";
import React, { useEffect, useState, useRef } from "react";
import "leaflet/dist/leaflet.css";

import Table from "../components/table_component";
import Header from "../components/header";
import Home from "../components/home";

function HomePage() {
	return (
		<div>
			<Header option="home" />, <Home />
		</div>
	);
}

export default HomePage;
