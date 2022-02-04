/** @format */

import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EditComponentModal({ data }) {
	const [details, setDetails] = useState({});

	//useEffect(() => {
	//if (data) setDetails(data);
	//}, []);
	//const handleChange = ({ target: { value, name } }) => {
	//setDetails({ ...details, [name]: value });
	//};

	//const handleSubmit = async () => {
	//try {
	//axios
	//.post(`http://localhost:5000/users/update/${details._id}}`)
	//.then(() => alert("Update"))
	//.catch((err) => alert(err));
	//	} catch (error) {
	//	alert(error.message);
	//}
	//};
	return (
		<div>
			<div
				className="modal fade"
				id="exampleModal"
				tabIndex="-1"
				aria-labelledby="exampleModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLabel">
								Modify User Data
							</h5>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<form className="container-fluid">
								<div className="mb-3">
									<label htmlFor="exampleInputEmail1" className="form-label">
										First Name:
									</label>
									<input
										//value={details.firstname}
										required
										type="text"
										className="form-control w-50"
										id="exampleInputEmail1"
										name="firstname"
										aria-describedby="emailHelp"
									//onChange={handleChange}
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputEmail1" className="form-label">
										Other Names:
									</label>
									<input
										//value={details.othername}
										//onChange={handleChange}
										name="othername"
										required
										type="text"
										className="form-control w-50"
										id="exampleInputEmail1"
										aria-describedby="emailHelp"
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="exampleInputPassword1" className="form-label">
										Age:
									</label>
									<input
										//	value={details.age}
										//	onChange={handleChange}
										name="age"
										required
										type="text"
										className="form-control w-50"
										id="exampleInputPassword1"
									/>
								</div>
								<div className="mb-3 form-check">
									<input
										type="radio"
										className="form-check-input"
										name="flexRadioDefault"
										value="Male"
										id="flexRadioDefault1"
									//selected={details.sex === "Male" ? true : false}
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
									//selected={details.sex === "Female" ? true : false}
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

export default EditComponentModal;
