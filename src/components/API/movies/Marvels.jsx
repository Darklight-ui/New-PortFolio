import axios from 'axios';
import requests from "../Request"
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const Marvels = () => {
    const [firstMovie, setFirstMovie] = useState()
    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData() {
            const marvel = await axios.get(requests.marvel)
            console.log(marvel);
            setFirstMovie(marvel.data)
        }
        fetchData()
    }, [])

    return <>

        <div className="container">{firstMovie?.items.map((movies) => (
            <div
                className="p-4 p-md-5 my-1 text-white rounded bg-secondary"
                key={movies.id}
                style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    // background: "linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))",
                    backgroundImage: `url("${base_url}${movies.poster_path}")`
                }}>
                <div className="col-md-6 px-0">
                    <h1 className="display-4 fst-italic">{movies.original_title}</h1>
                    <p className="lead my-3">{movies.overview}</p>
                    <p className="lead mb-0" ><Link to="#" className="text-white fw-bold">URL</Link></p>
                </div>

            </div>
        ))}
        </div>

    </>
}
export default Marvels;
