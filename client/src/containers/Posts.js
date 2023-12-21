import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

export default () => {
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    return (
        <div>
            {isAuthenticated && <Link type="button" className="btn btn-success" to='/insertpost'>Add Post</Link>}
        </div>
    )

}