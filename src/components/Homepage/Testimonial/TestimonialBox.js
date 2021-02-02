import React from 'react';
import './Testimonial.css'
const TestimonialBox = ({ data }) => {
    return (
        <div className="col-md-4 my-3">
            <div className="testimonial-wraper">
                <div className="pt-5">
                    <p>{data.review}</p>
                </div>
                <div className="user">
                    <div>
                        <img src={data.img} alt="" />
                    </div>
                    <div>
                        <h5 className="brand-text">{data.name}</h5>
                        <small>{data.location}</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialBox;