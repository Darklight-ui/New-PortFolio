/** @format */

import React, { useState } from "react";
import axios from "axios";

function AddUserCompnent() {
	const [name, setName] = useState("");
	const [otherName, setOtherName] = useState("");
	const [sex, setSex] = useState("");
	const [age, setAge] = useState("");

	const toSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/users/new_user", {
				firstname: name,
				othername: otherName,
				sex: sex,
				age: age,
			})
			.then((res) => console.log(res.data))
			.catch((err) => alert(err));

		window.location = "/viewData";
	};
	return (
		<div className="addUserCompnent">
			<div
				className="modal fade"
				id="exampleModal1"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Add User
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form className="container-fluid" onSubmit={toSubmit}>
								<div className="mb-3">
									<label htmlFor="exampleInputEmail1" className="form-label">
										First Name:
									</label>
									<input
										required
										type="text"
										className="form-control w-50"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										onChange={(e) => {
											setName(e.target.value);
										}}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputEmail1" className="form-label">
										Other Names:
									</label>
									<input
										required
										type="text"
										className="form-control w-50"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
										onChange={(e) => {
											setOtherName(e.target.value);
										}}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputPassword1" className="form-label">
										Age:
									</label>
									<input
										required
										type="text"
										className="form-control w-50"
										id="exampleInputPassword1"
										onChange={(e) => {
											setAge(e.target.value);
										}}
									/>
								</div>
								<div className="mb-3 form-check">
									<input
										type="radio"
										className="form-check-input"
										name="flexRadioDefault"
										value="Male"
										id="flexRadioDefault1"
										onChange={(e) => {
											setSex(e.target.value);
										}}
									/>
									<label className="form-check-label" htmlFor="exampleCheck1">
										Male
									</label>
								</div>
								<div className="mb-3 form-check">
									<input
										type="radio"
										value="Female"
										className="form-check-input"
										name="flexRadioDefault"
										id="flexRadioDefault1"
										onChange={(e) => {
											setSex(e.target.value);
										}}
									/>
									<label className="form-check-label" htmlFor="exampleCheck1">
										Female
									</label>
								</div>
								<button type="submit" className="btnn btn-primary">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AddUserCompnent;
