import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Routing from "./RoutingMachine";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "./components/navbar_component";
import { User, LatLng } from "./User";
import Table from "./components/table_component";
import MyMapContainer from "./components/mapcontainer_component";
import Header from "./components/header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/bootstrap.min.css";
import Home from "./components/home";
import Bins from "./pages/Bins";
import Trucks from "./pages/Trucks";
import Login from "./pages/Login";
import HomePage from "./pages/homepage";
import AddBin from "./pages/AddBin";
import AddTruck from "./pages/AddTruck";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route index element={[<Login />]} />
				{/* <Route path="About" element={<About />} /> */}
				<Route path="/trucks" element={<Trucks />} />
				<Route path="/bins" element={<Bins />} />
				{/* <Route path="/login" element={<Login />} /> */}
				<Route path="/homepage" element={<HomePage />} />
				<Route path="/addbin" element={<AddBin />} />
				<Route path="/addtruck" element={<AddTruck />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
