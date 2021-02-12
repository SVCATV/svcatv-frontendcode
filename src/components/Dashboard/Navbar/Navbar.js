import React from 'react';
import './Navbar.css';

import { FaSearch } from 'react-icons/fa';
import { BiChevronDown } from 'react-icons/bi';
// import ogo
import logo from '../../../assets/logo.png';

function Navbar() {
    return (
            <div className="navbar">
                <div className="logo">
                        <img src={logo} alt="logo"  style={{width:"100%"}}/>
                </div>

                <div className="search-input">
                    <input type="text" placeholder="Search for anything.."/>
                    <i><FaSearch /></i>
                </div>

                <div className="profile">
                    <img src="/img/Models/african-american.jpg" alt="profile" style={{width:"8%"}}/>
                    <p>Clifford Nathaniel</p>
                    <i><BiChevronDown /></i>
                </div>

            </div>
    )
}

export default Navbar
