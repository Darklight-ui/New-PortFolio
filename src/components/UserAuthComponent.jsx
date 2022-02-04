import React from 'react';
import LoginComponent from './LoginComponent';
import RegisterUserComponent from './RegisterUserComponent';

function UserAuthComponent() {
    return <>
        <ul className="nav nav-tabs p-5 w-25" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                    Log in
                </button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                    Register
                </button>
            </li>
        </ul>
        <div className="tab-content" id="myTabContent">
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <LoginComponent />
            </div>
            <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <RegisterUserComponent />
            </div>
        </div>
    </>

}

export default UserAuthComponent;
