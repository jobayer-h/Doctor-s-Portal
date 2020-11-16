import React from 'react';
import './service.css'
const ServiceBox = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <div className="service-box">
                <img className="my-4" src={service.img} alt=""/>
                <h4 className="my-4">{service.name}</h4>
                <p className="text-secondary">{service.text}</p>
            </div>
        </div>
    );
};

export default ServiceBox;