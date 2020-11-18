import React from 'react';
import './Doctor.css';
import doctorImage from '../../../images/doctor.png'
import DoctorBox from './DoctorBox';
const Doctor = () => {

    const doctorData = [
        {
            name: 'Dr. Codi',
            phone: '+111 7981234',
            image:doctorImage
        },{
            name: 'Dr. Codi',
            phone: '+111 7981234',
            image:doctorImage
        },{
            name: 'Dr. Codi',
            phone: '+111 7981234',
            image:doctorImage
        }
    ]

    return (
        <div className="container my-5">
            <h4 className="text-center brand-text">Our Doctors</h4>

            <div className="row">
                {
                    doctorData.map(doctor => <DoctorBox data={doctor} />)
                }
            </div>
        </div>
    );
};

export default Doctor;