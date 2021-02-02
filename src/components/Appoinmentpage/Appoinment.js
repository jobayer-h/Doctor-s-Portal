import React, { useState } from 'react';
import Navbar from '../Common/Navbar/Navbar';
import heroImage from '../../images/Chair.png'
import './appoinment.css'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Footer from '../Common/Footer/Footer';
const Appoinment = () => {
    const [value, onChange] = useState(new Date());
    const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
    console.log(value);
    return (
        <main className="appoinment-section">
            <div className="appoinment-hero-bg">
                <div className="container">
                    <Navbar />
                    <div style={{ margin: '150px auto' }} className="row">
                        <div className="col-md-6">
                            <h2>Appoinment</h2>

                            <Calendar
                                className="mt-5 calander"
                                onChange={onChange}
                                value={value}
                            />

                        </div>
                        <div className="col-md-6 mt-3">
                            <img className="img-fluid" src={heroImage} alt="" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="appoinment-booking">
                <h1 className="brand-text text-center">Available Appoinments on {monthNames[value.getMonth()]} {value.getDate()}, {value.getFullYear()}</h1>
            </div>
            <Footer />
        </main>
    );
};

export default Appoinment;