import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../actions/authAction";

export default () => {
    const { isAuthenticated, loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const authLinks = (
        <>
            <Link className="nav-link" to="/myposts">My Posts</Link>
            <Link className="nav-link" to="/profile">Profile</Link>
            <Link className="nav-link" to="/" onClick={() => { dispatch(logout()) }}>Logout</Link>
        </>
    );
    const guestLinks = (
        <>
            <Link className="nav-link" to="/register">Register</Link>
            <Link className="nav-link" to="/login">Login</Link>
        </>
    );
    return (
        <>
            <nav className="navbar" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Trip Logs</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav ml-auto">
                            <Link className="nav-link" aria-current="page" to="/posts">Posts</Link>
                            {!loading && (isAuthenticated ? authLinks : guestLinks)}
                        </div>
                    </div>
                </div>
            </nav >
        </>
    );
}

