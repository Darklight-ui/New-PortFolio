import axios from 'axios';
import React, { useState } from 'react';

function LoginComponent() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState('')


    // const onLogIn = async (e) => {
    //     e.preventDefault()

    //     await fetch("http://localhost:5000/auth/login", {
    //         method: "POST",
    //         headers: { 'content-type': 'application/json' },
    //         // credentials: 'include',
    //         body: JSON.stringify({
    //             email,
    //             password
    //         })

    //     })
    // }

    const onLogIn = async (e) => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:5000/auth/login", {
                email: email,
                password: password,
            })
                .then((res) => console.log(res.data))
                .catch((error) => console.log(error))
        } catch (error) {
            console.log(error);
        }
    }

    const containerStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // margin: "10px"
        width: "100%"
    }
    return <>
        <div className="container" style={containerStyle}>
            <div className="title">
                <h3 className="title">
                    Log in
                </h3>
            </div>
            <form action="POST" onSubmit={onLogIn}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email :
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        className='form-control'
                        onChange={(e) => { setEmail(e.target.value) }}
                    />
                </div>
                <div className="mb-3">
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
                {/* <Link to={email, password && '/'}> */}
                <button className="btnn w-100 bg-dark text-light">Log in</button>
                {/* </Link > */}
            </form>
        </div>
    </>;
}

export default LoginComponent;
