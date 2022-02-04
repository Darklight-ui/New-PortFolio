import React from 'react';
import Abuja from './API/cities/Abuja';
import Lagos from './API/cities/Lagos';

// import '../../src/App.css'
import London from './API/cities/London';

function WeatherComponent() {

    return (
        <div className="weatherComponent container-fluid ">
            <h1 className="text-center mt-3">Weather Forcast 24/7</h1>
            <table className="table-striped table container">
                <thead>
                    <tr>
                        <th scope="col">City</th>
                        <th scope="col">Initials</th>
                        <th scope="col">Detail</th>
                        <th scope="col">Temperature</th>
                        <th scope="col">Longitude</th>
                        <th scope="col">Latitude</th>
                        <th scope="col">Humidy</th>
                        <th scope="col">icons</th>
                    </tr>
                </thead>
                <tbody>
                    <Abuja />
                    <Lagos />
                    <London />
                </tbody>
            </table>
        </div>
    )
}

export default WeatherComponent;
