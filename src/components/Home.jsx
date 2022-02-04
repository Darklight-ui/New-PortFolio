import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return <>
        <div className="d-flex h-100 text-center text-white bg-dark">

            <div className="cover-container  w-100  p-3 mx-auto ">
                <main className="px-3">
                    <h1>Cover your page.</h1>
                    <p className="lead">Cover is Link one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
                    <p className="lead">
                        <Link to="#" className="btnn btn-lg btn-secondary fw-bold border-white bg-white">Learn more</Link>
                    </p>
                </main>

                <footer className="mt-auto text-white-50">
                    <p>Cover template for <Link to="https://getbootstrap.com/" className="text-white">Bootstrap</Link>, by <Link to="https://twitter.com/mdo" className="text-white">@mdo</Link>.</p>
                </footer>
            </div>



        </div>
    </>;
}

export default Home;
