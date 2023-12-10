import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        confirmPassword: ''
    });
    const { username, password, confirmPassword } = formData;

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.log('Passwords do not match')
        } else {
            console.log(formData);
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
                        required
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
                        required
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
                        required
                    />
                </div>
                <button type="submit" className="btn btn-info text-white">Register</button>
                <p>Already have an account? <Link to="/login" className="link-primary">Sign In</Link></p>

            </form>
        </div >
    );
}

export default Register