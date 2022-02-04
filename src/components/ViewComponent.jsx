/** @format */

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../src/App.css";
import EditComponentModal from "./EditComponentModal";
import AddUserCompnent from "./AddUserCompnent";

function ViewComponent() {
	const [data, setData] = useState('');
	const [getData, setGetData] = useState([]);



	// Get User Section
	useEffect(() => {
		axios.get("http://localhost:5000/users")
			.then((res) => setGetData(res.data));
	}, []);

	const deleteData = (id) => {
		axios.delete(`http://localhost:5000/users/remove/${id}`)
			.then(() => alert("Deleted"))
			.catch((err) => alert(err));

		window.location = "/viewData";
	};

	return (
		<div className="viewComonent container">
			<h1 className="text-center mt-3">User Manager System</h1>
			<div className="add-btn mt-3">
				<button
					className="btnn bg-dark btn-dark align"
					data-bs-toggle="modal"
					data-bs-target="#exampleModal1"
				// disabled
				>
					Add User
					<span className="material-icons">
						person_add
					</span>
				</button>
			</div>

			<table className="table-striped table container">
				<thead>
					<tr>
						<th scope="col">First Name</th>
						<th scope="col">Other Name</th>
						<th scope="col">Sex</th>
						<th scope="col">Age</th>
						<th scope="col">Action</th>
					</tr>
				</thead>
				<tbody>
					{getData.map((val, index) => {
						return (

							<tr key={index}>
								<td> {val.firstname} </td>
								<td> {val.othername} </td>
								<td> {val.sex} </td>
								<td> {val.age} </td>
								<td>
									<span
										className="material-icons pointer disabled"
										disabled
										aria-disabled="true"
										data-bs-toggle="tooltip"
										data-bs-placement="bottom"
										title="edit"
										data-bs-toggle="modal"
										data-bs-target="#exampleModal"
										onClick={() => setData({ data })}
									>
										edit
									</span>
									<span
										className="material-icons pointer"
										data-bs-toggle="tooltip"
										data-bs-placement="top"
										title="delete"
										onClick={() => {
											deleteData(val._id);
										}}>
										delete
									</span>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>

			{/* model */}
			<EditComponentModal />
			<AddUserCompnent />
		</div>
	);
}

export default ViewComponent;
