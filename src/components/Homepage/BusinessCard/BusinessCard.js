import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './businessCard.css'
const BusinessCard = ({data}) => {
    return (
        <div style={{padding:'0px 5px',margin:'5px auto'}} className="col-md-4" >
            <div style={{borderRadius:'5px'}} className={data.bg}>
            <div className="d-flex justify-content-around business-card">
                <div className="business-icon-container">
                    <FontAwesomeIcon className="business-icon" icon={data.icon}></FontAwesomeIcon>
                </div>
                <div className="business-text">
                    <h4>{data.title}</h4>
                    <small>{data.text}</small>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BusinessCard;