import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../../actions/authAction";

export default ({ closeModal }) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = formData;
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const dispatch = useDispatch();
    const onSubmit = (e) => {
        e.preventDefault();
        closeModal();
        dispatch(loginAction(username, password));

    }
    if (isAuthenticated) {
        return <Navigate to='feed'></Navigate>
    }
    return (
        <div className="login--container">

            <div className="login--headerContainer">
                <h1 className="login--title">Sign In</h1>
                <button className="login--closeButton" onClick={() => closeModal()}>x</button>
            </div>

            <form className="login--form" onSubmit={e => onSubmit(e)}>

                <input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={e => setFormData({ ...formData, username: e.target.value })}
                    required
                />


                <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    value={password}
                    onChange={e => setFormData({ ...formData, password: e.target.value })}
                    required
                />
                <button type="submit" className="btn bg-main-color text-blue-color login--submitButton">Login</button>

            </form>

            <div className="login--footerContainer">
                <p>New here? <a href="#">Register</a> </p>
                <a className="login--forgotPassword" href="#">Forgot Password</a>
            </div>
        </div >
    );
}