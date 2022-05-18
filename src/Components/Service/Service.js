import React from 'react';
import './Service.css';
const Service = ({service}) => {
    return (
        <div className="service-card card bg-base-100">
        <figure><img className='mt-10' src={service.img} alt="Album"/></figure>
        <div className="card-body text-center">
                <h2 className="card-title mx-auto">{service.title}</h2>
                <p>{service.description}</p>
         
        </div>
      </div>
    );
};

export default Service;