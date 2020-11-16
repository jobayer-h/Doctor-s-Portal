import React from 'react';
import Fluoride from '../../../images/Fluoride.png';
import Teath from '../../../images/Teath.png';
import Cavity from '../../../images/Cavity.png';
import ServiceBox from './ServiceBox';
import Treatment from '../../../images/treatement.png'

const Services = () => {

    const serviceData =[
        {
            name: 'Fluoride Treatment',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aperiam ratione enim ab debitis sapiente?',
            img:Fluoride
        },
        {
            name: 'Cavity Filling',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aperiam ratione enim ab debitis sapiente?',
            img:Cavity
        },
        {
            name: 'Teath Whitening',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi aperiam ratione enim ab debitis sapiente?',
            img:Teath
        }
    ]


    return (
        <div className="my-5">
            <h4 className="text-center" style={{color: '#5fc7c7'}}>OUR SERVICES</h4>
            <h2 className="text-center" style={{marginBottom:'100px',marginTop:'50px'}}>Services We Provide</h2>
            <div className="row my-5">
                {
                    serviceData.map(service => <ServiceBox service={service} />)
                }
            </div>
            <div className="row">
                <div className="col-md-5">
                    <img src={Treatment} alt="" className="img-fluid"/>
                </div>
                <div className="col-md-7">
                    <h2 className="my-5">Exceptional Dental <br/> Care, on Your Terms</h2>
                    <p className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit perspiciatis id tempora nesciunt dolores modi minus dolorem aliquam, provident, dolorum delectus molestiae animi quibusdam quidem, debitis laudantium? Ducimus aperiam voluptatum sit voluptate recusandae, id nemo? Id architecto, nulla consequuntur at repellat placeat sint omnis magni officia optio non sed fugiat quae. Recusandae, sequi corrupti! Dicta provident eveniet, autem inventore odit a quos, libero atque perspiciatis, omnis iusto laudantium ips ipsum dolor sit amet consectetur adipisicing elit. Fugit perspiciatis id tempora nesciunt dolores modi minus dolorem aliquam, provident, dolorum delectus molestiae animi quibusdam quidem, debitis laudantium? Ducimus aperiam voluptatum sit voluptate recusandae, id nemo? Id architecto, nulla consequuntur at repellat placeat sint omnis magni officia optio non sed fugiat quae. Recusandae, sequi corrupti! Dicta provident eveniet, autem inventore odit a quos, libero atque perspiciatis, omnis iusto laudantium ipsa eum?</p>
                    <button className="btn btn-brand mt-3">Learn More</button>
                </div>
                
            </div>
        </div>
    );
};

export default Services;