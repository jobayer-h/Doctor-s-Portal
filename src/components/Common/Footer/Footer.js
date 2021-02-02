import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="container footer-container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <ul>
                        <li>Emargency Dental Care</li>
                        <li>Checkup</li>
                        <li>Checkup</li>
                        <li>Treatement of Personal Diseases</li>
                        <li>Tooth Extraction</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <p className="brand-text">Services</p>
                <ul>
                        <li>Emargency Dental Care</li>
                        <li>Checkup</li>
                        <li>Checkup</li>
                        <li>Treatement of Personal Diseases</li>
                        <li>Tooth Extraction</li>
                        <li>Treatement of Personal Diseases</li>
                        <li>Tooth Extraction</li>
                    </ul>
                </div>
                <div className="col-md-3">
                <p className="brand-text">Oral Helth</p>
                <ul>
                        <li>Emargency Dental Care</li>
                        <li>Checkup</li>
                        <li>Checkup</li>
                        <li>Treatement of Personal Diseases</li>
                        <li>Tooth Extraction</li>
                        <li>Treatement of Personal Diseases</li>
                        <li>Tooth Extraction</li>
                    </ul>
                </div>
                <div className="col-md-3">
                <p className="brand-text">Our Address</p>
                    <ul>
                        <li>New York - 1000 Hudson Yards</li>
                        <li>call now</li>
                        <li className="btn btn-brand" >+110 729 3908</li>
                    </ul>
                </div>
            </div>
            <p className="text-center mt-2">Copyright {new Date().getFullYear()} . all rights reserved.</p>
        </footer>
    );
};

export default Footer;