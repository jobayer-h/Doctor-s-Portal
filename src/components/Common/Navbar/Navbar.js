import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
           
            <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item mr-5">
                        <Link class="nav-link" to="/">Home</Link>
                    </li>
                    <li class="nav-item mr-5">
                        <Link class="nav-link" to="/">About</Link>
                    </li>
                    <li class="nav-item mr-5">
                        <Link class="nav-link" to="/">Dental Services</Link>
                    </li>
                    <li class="nav-item mr-5">
                        <Link class="nav-link" to="/">Review</Link>
                    </li>
                    <li class="nav-item mr-5">
                        <Link class="nav-link" to="/">Blog</Link>
                    </li>
                    <li class="nav-item mr-5">
                        <Link class="nav-link" to="/appoinment">Contact Us</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;