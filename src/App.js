/** @format */

import React from "react";
import { Routes, Route } from "react-router-dom";
import AddUserCompnent from "./components/AddUserCompnent";
import Marvels from "./components/API/movies/Marvels";
import Home from "./components/Home";
import NavigationComponent from "./components/NavigationComponent";
import UserAuthComponent from "./components/UserAuthComponent";
import ViewComponent from "./components/ViewComponent";
import WeatherComponent from "./components/WeatherComponent";

function App() {
	return (
		<div className="app">
			<NavigationComponent />
			<Routes>
				<Route path="/" index element={<Home />} />
				<Route path="/viewData" element={<ViewComponent />} />
				<Route path="/addData" element={<AddUserCompnent />} />
				<Route path="/weather" element={<WeatherComponent />} />
				<Route path="/auth" element={<UserAuthComponent />} />
				<Route path="/showMarvel" element={<Marvels />} />
			</Routes>
		</div>
	);
}

export default App;
