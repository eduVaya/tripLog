import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default () => {
    // const { isAuthenticated, loading } = useSelector((state) => state.auth);
    const toggleActive = (button) => {
        const buttons = document.querySelectorAll('.toggleTextButtons--button');
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        button.classList.add('active');
    }

    return (
        <div className="toggleTextButtons">
            <Link className="toggleTextButtons--button active" to="/" onClick={(e) => toggleActive(e.target)}>Post Feed</Link>
            <Link className="toggleTextButtons--button" to="/myposts" onClick={(e) => toggleActive(e.target)}>My Posts</Link>
            <Link className="toggleTextButtons--button" to="/profile" onClick={(e) => toggleActive(e.target)}>Profile</Link>
        </div>
    );
}