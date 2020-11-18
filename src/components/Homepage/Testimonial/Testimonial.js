import React from 'react';
import person1 from '../../../images/Ellipse 1.png';
import person2 from '../../../images/Ellipse 2.png';
import person3 from '../../../images/Ellipse 3.png';
import TestimonialBox from './TestimonialBox';
import './Testimonial.css'
const Testimonial = () => {
    const testimonialData = [
        {
            name: 'Winson Herry',
            location: 'California',
            img: person1,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit aperiam totam. Ipsam nam pariatur minus asperiores perferendis?'
        },
        {
            name: 'Winson Herry',
            location: 'California',
            img: person2,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit aperiam totam. Ipsam nam pariatur minus asperiores perferendis?'
        },
        {
            name: 'Winson Herry',
            location: 'California',
            img: person3,
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex velit aperiam totam. Ipsam nam pariatur minus asperiores perferendis?'
        }
    ]
    return (
        <section className="container testimonial-section">
            <div className="testimonial-bg">
                <h4 className="brand-text my-5">Testimonial</h4>
                <h2 className="my-5" >What's Our Patients <br /> Says</h2>
            </div>

            <div className="row">
                {
                    testimonialData.map(data => <TestimonialBox data={data} />)
                }
            </div>
        </section>
    );
};

export default Testimonial;