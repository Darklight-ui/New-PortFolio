import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'
import Axios from 'axios'

export default function RegisterUserComponent() {
    const [firstname, setFirstName] = useState("")
    const [lastname, setOtherName] = useState("")
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    function handleSubmit(e) {
        e.preventDefault()

        Axios.post("http://localhost:5000/auth/register", {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password
        })
            .then((res) => console.log(res.data))
            .catch((error) => console.log(error))

    }
    <Navigate to="/auth" />

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // margin: "10px"
        width: "100%"
    }

    const gridStyle = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gridGap: "10px"
    }
    return <div>
        <div className="container" style={containerStyle}>
            <div className="title">
                <h3 className="title">
                    Sign up
                </h3>
            </div>
            <form action="POST" style={gridStyle} onSubmit={handleSubmit}>
                <div className="grid">
                    <div className="mb-auto">
                        <label htmlFor="firstName" className="form-label">
                            First Name :
                        </label>
                        <input
                            type="firstname"
                            name="firstname"
                            id="firstname"
                            required
                            className='form-control'
                            onChange={(e) => { setFirstName(e.target.value) }}
                        />
                    </div>
                    <div className="mb-auto">
                        <label htmlFor="lastname" className="form-label">
                            Last Names :
                        </label>
                        <input
                            type="text"
                            name="lastname"
                            id="lastname"
                            required
                            className='form-control'
                            onChange={(e) => { setOtherName(e.target.value) }}
                        />
                    </div>
                    <div className="mb-auto">
                        <label htmlFor="email" className="form-label">
                            Email :
                        </label>
                        <input
                            type="text"
                            name="email"
                            id="email"
                            required
                            className='form-control'
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                    </div>
                </div>
                <div className="grid">
                    <div className="mb-auto">
                        <label htmlFor="username" className="form-label">
                            Username :
                        </label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            required
                            className='form-control'
                            onChange={(e) => { setUserName(e.target.value) }}
                        />
                    </div>
                    <div className="mb-auto">
                        <label htmlFor="password" className="form-label">
                            Password :
                        </label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            required
                            className="form-control"
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                    </div>
                </div>
                <button type="submit" className="mt-3 btnn w-100 bg-dark text-light">Sign up</button>
            </form>
        </div>
    </div>;
}
