import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Trip Logs</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <a className="nav-link" aria-current="page" href="#">Posts</a>
                            <a className="nav-link" href="#">Register</a>
                            <a className="nav-link" href="#">Login</a>
                        </div>
                    </div>
                </div>
            </nav >
        </>
    );
}

export default Navbar