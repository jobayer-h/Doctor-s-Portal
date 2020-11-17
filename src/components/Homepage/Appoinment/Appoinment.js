import React from 'react';
import doctor from '../../../images/doctor.png'
import './Appoinment.css'
const Appoinment = () => {
    return (
        <section className="row appoinment-bg">
                <div className="col-md-5">
                    <img src={doctor} alt="" className="img-fluid doctor-image"/>
                </div>
                <div className="col-md-7">
                    <h4 className="my-5 brand-text">Appoinment</h4>
                    <h2 className="my-5 text-white">Make An Appoinment Today</h2>
                    <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quod, cupiditate sint nostrum totam veritatis quo quisquam ea vero ad consequatur porro laudantium quos expedita fugit cum voluptates repellat.</p>
                    <button className="btn btn-brand mt-3">Learn More</button>
                </div>
                     
        </section>
    );
};

export default Appoinment;