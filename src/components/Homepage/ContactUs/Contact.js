import React from 'react';
import { useForm } from 'react-hook-form';
import './contact.css';
const Contact = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };


    return (
        <section className="container">
            <div className="py-3">

                <div className="my-5">
                    <h4 className="text-center brand-text">CONTACT US</h4>
                    <h2 className="text-center" style={{ marginBottom: '30px', marginTop: '40px', color: 'white' }}>Always Contact With Us</h2>

                    <form className="contact-form py-5" onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-group">
                            <input ref={register} name="email" type="email" class="form-control" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <input ref={register} name="Subject" type="text" class="form-control" placeholder="Subject" />
                        </div>
                        <div class="form-group">
                            <textarea ref={register} name="Message" class="form-control" placeholder="Your Message" rows="5"></textarea>
                        </div>
                        <div class="form-group contact-btn">
                            <input ref={register} class="btn btn-brand" type="submit" />
                        </div>

                    </form>

                </div>
            </div>

        </section>

    );
};

export default Contact;