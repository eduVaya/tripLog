import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../actions/authAction";
import ToggleTextButtons from "../ToggleTextButtons/ToggleNavButtons"
import RoundedProfilePicture from "../RoundedProfilePicture/RoundedProfilePicture";
import Modal from "../Modal/Modal";
import Register from "../Register/Register";
import Login from "../Login/Login";

export default () => {
    const [showMenu, setShowMenu] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isRegister, setisRegister] = useState(false);
    const { isAuthenticated, loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    return (
        <nav className="navbar">
            <img src='' className="navbar--icon"></img>
            <div className={`navbar--menu ${showMenu ? 'navbar--showMenu' : ''}`}>
                {!loading && (isAuthenticated && < ToggleTextButtons />)}
                <div className="navbar--accountContainer">
                    {!loading && (!isAuthenticated && <button className="btn bg-main-color text-blue-color" onClick={() => { setisRegister(true); setIsOpen(true) }}>Register</button>)}
                    {!loading && (isAuthenticated ?
                        <button className="btn bg-main-color text-blue-color" onClick={() => dispatch(logout())}>Logout</button>
                        :
                        <button className="btn bg-main-color text-blue-color" onClick={() => { setisRegister(false); setIsOpen(true) }}>Login</button>
                    )}
                    {!loading && (isAuthenticated && <RoundedProfilePicture />)}
                </div>
            </div>
            <div className="navbar--hamburger" onClick={() => setShowMenu(!showMenu)}>
                ☰
            </div>
            <Modal open={isOpen}>
                {isRegister ? <Register /> : <Login closeModal={() => setIsOpen(false)} />}
            </Modal>
        </nav>
    );
}