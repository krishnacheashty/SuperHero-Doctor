import React from 'react';
import './Header.css';
import logo from '../../image/598f325b7c8ad_thumb900.jpg';
import navLogo from '../../image/RELATIENT_logo-medres.png'

const Header = () => {
    return (
        <div className="container">
           <div className="img-div">
           <img className='logo-image' src={logo} alt="" />
           </div>
            <div className="nav-main">
                <div className="img-div">
                    <h3>In your city <span className="text-span fs-4  text-danger">our medical team</span> is now here.</h3>
                    <h4>our team <span className="text-primary fs-4">total Budget : </span> $100000.</h4>
                </div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <img className="nav-logo" src={navLogo} alt="" />
                            
                            <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav nav-items">
                            <li className="nav-item ">
                            <a className=" active navbar-brand" aria-current="page" href="/Home">Home</a>
                            </li>
                            <li className="nav-item">
                            <a className="navbar-brand" href="/Services">Services</a>
                            </li>
                                <li className="nav-item">
                            <a className="navbar-brand" href="/About">About</a>
                            </li>
                            <li className="nav-item">
                            <a className="navbar-brand" href="/Feedback" >Feedback</a>
                            </li>
                            </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;