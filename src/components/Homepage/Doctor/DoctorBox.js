import React from 'react';
import './Doctor.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'


const DoctorBox = ({data}) => {
    return (
        <div className="col-md-4 text-center">
            <div className="service-box">
                <img className="my-4 img-fluid" src={data.image} alt=""/>
                <h4 className="my-4">{data.name}</h4>
                <p className="text-secondary"><FontAwesomeIcon icon={faPhone} /> . .{data.phone}</p>
            </div>
        </div>
    );
};

export default DoctorBox;