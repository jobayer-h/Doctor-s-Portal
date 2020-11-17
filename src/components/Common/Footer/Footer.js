import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer-container">
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
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;