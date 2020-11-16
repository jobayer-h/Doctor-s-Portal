import React from 'react';
import Navbar from '../../Common/Navbar/Navbar';
import HeroComponent from '../HeroComponent/HeroComponent';
import Services from '../Services/Services';
import './Home.css'
const Home = () => {
    return (
        <div className="hero-bg">
            <div className="container">
                <Navbar />
                <HeroComponent />
                <Services />
            </div>
        </div>
    );
};

export default Home;