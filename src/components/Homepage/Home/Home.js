import React from 'react';
import Footer from '../../Common/Footer/Footer';
import Navbar from '../../Common/Navbar/Navbar';
import Appoinment from '../Appoinment/Appoinment';
import Blog from '../Blog/Blog';
import Contact from '../ContactUs/Contact';
import Doctor from '../Doctor/Doctor';
import HeroComponent from '../HeroComponent/HeroComponent';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';
import './Home.css'
const Home = () => {
    return (
        <main>
            <div className="hero-bg">
                <div className="container">
                    <Navbar />
                    <HeroComponent />
                </div>
            </div>
            <Services />

            <div className="appoinment-bg">
                <Appoinment />
            </div>

            <Testimonial />
            <Blog />
            <Doctor />

            <div className="contact-container">
                <Contact />
            </div>
            
            <Footer />
        </main>
    );
};

export default Home;