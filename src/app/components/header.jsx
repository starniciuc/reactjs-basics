import React from "react";
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (<nav className="navbar navbar-default">
        <div className="container">
            <div className="navbar-header">
                <ul className="nav navbar-nav">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/user/4">User</Link></li>
                </ul>
            </div>
        </div>
    </nav>)
};

export default Header;