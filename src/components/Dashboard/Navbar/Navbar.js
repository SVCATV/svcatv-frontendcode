import React from 'react';

// navigations
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// import ogo
import logo from '../../../assets/logo.png';

import './Navbar.css';

function Navbar() {
    return (
        <Router>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
            </div>
        </Router>
    )
}

export default Navbar
