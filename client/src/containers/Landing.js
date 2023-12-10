import React from "react";

const Landing = () => {
    return (
        <div className="bg-secondary d-flex align-items-center justify-content-center vh-100">
            <div className="container text-center">
                <h1 className="text-white">Trip Logs</h1>
                <p className="text-white">Create and share logs of your trips.</p>
                <div className="col-md-6 mx-auto">
                    <button type="button" className="btn btn-info col me-2">Sign Up</button>
                    <button type="button" className="btn btn-light col ">Login</button>
                </div>
            </div>
        </div>
    )
}
export default Landing
