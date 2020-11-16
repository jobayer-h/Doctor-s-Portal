import React from 'react';
import BusinessCard from '../BusinessCard/BusinessCard';
import { faClock ,faMapMarkerAlt, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'


const BusinessInfo = () => {

    const businessData = [
        {
            title: 'Opening Hour',
            text: 'Lorem ipsum dolor sit amet',
            icon: faClock,
            bg: 'primary'
        },
        {
            title: 'Visite Our Locataion',
            text: 'Lorem ipsum dolor sit amet',
            icon: faMapMarkerAlt,
            bg: 'dark'
        },
        {
            title: 'Contact Us',
            text: '+880 1720-000000',
            icon: faPhoneVolume,
            bg: 'primary'
        }
    ]

    return (
        <div className="row">
            {
                businessData.map( business => <BusinessCard data={business} />)
            }
        </div>
    );
};

export default BusinessInfo;