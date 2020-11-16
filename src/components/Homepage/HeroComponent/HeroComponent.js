import React from 'react';
import heroImage from '../../../images/Chair.png'
import BusinessInfo from '../BusinessInfo/BusinessInfo';
const HeroComponent = () => {
    return (
        <section>
            <div style={{margin:'150px auto'}} className="row">
                <div className="col-md-6">
                    <h2>Your New Smile <br /> Start Heare</h2>
                    <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nam culpa possimus ducimus quos. Nulla.</p>
                    <button className="btn btn-brand">GET APPOINMENT</button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={heroImage} alt="" />
                </div>

            </div>
            <div>
                <BusinessInfo />
            </div>
        </section>
    );
};

export default HeroComponent;