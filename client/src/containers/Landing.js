import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";

export default () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    if (isAuthenticated) {
        return <Navigate to='feed'></Navigate>
    }
    return (
        <div className="bg-secondary d-flex align-items-center justify-content-center vh-100 landingContainer">
            {/* <div className="container text-center">
                <h1 className="text-white">Trip Logs</h1>
                <p className="text-white">Create and share logs of your trips.</p>
                <div className="col-md-6 mx-auto">
                    <Link to='/register' type="button" className="btn btn-info col me-2">Sign Up</Link>
                    <Link to='/login' type="button" className="btn btn-light col ">Login</Link>
                </div>
            </div> */}
        </div>
    )
}
