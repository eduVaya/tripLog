import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setAlertAction } from "../../actions/alertActions";
import { registerAction } from '../../actions/authAction'


export default () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });
    const { username, password, confirmPassword } = formData;
    const dispatch = useDispatch();

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            dispatch(setAlertAction('Passwords do not match', 'danger'));
        } else {
            dispatch(registerAction({ username, password }));
        }
    }
    return (
        <div className="authContainer container">
            <h1 className="text-info">Sign Up</h1>
            <form onSubmit={e => onSubmit(e)}>
                <div className="mb-3">
                    <label className="form-label">Username</label>
                    <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={username}
                        onChange={e => setFormData({ ...formData, username: e.target.value })}
                    // required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={e => setFormData({ ...formData, password: e.target.value })}
                    // required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Confirm Password</label>
                    <input
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                    // required
                    />
                </div>
                <button type="submit" className="btn btn-info text-white">Register</button>
            </form>
        </div>
    );
}