import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Request';

function Lagos() {
    const [lagos, setLagosName] = useState()
    const [desc, setDesc] = useState()
    const [sys, setSys] = useState()
    const [main, setMain] = useState()
    const [coords, setCoords] = useState()
    // const [humidity, setHumdity] = useState()

    useEffect(() => {
        async function fetchData() {
            const request = await Axios.get(requests.lagos)
            setLagosName(request.data)
            setDesc(request.data.weather[0])
            setSys(request.data.sys)
            setMain(request.data.main)
            // setMain(request.data.humidity)
            setCoords(request.data.coord)

            // return request

        }
        fetchData()
    }, [])

    return <>
        <tr>
            <td>{lagos?.name}</td>
            <td>{sys?.country}</td>
            <td>{desc?.description}</td>
            <td>{main?.temp}</td>
            <td>{coords?.lon}</td>
            <td>{coords?.lat}</td>
            <td>{main?.humidity}</td>
            <td><i className="fa">&#x04d;</i></td>

        </tr></>;
}

export default Lagos;
