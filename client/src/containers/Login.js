import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const { username, password } = formData;

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="authContainer container">
            <h1 className="text-info">Sign In</h1>
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
                <button type="submit" className="btn btn-info text-white">Login</button>
                <p>Don't have an account? <Link to="/register" className="link-primary">Sign up</Link></p>

            </form>
        </div >
    );
}

export default Login