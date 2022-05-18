import React from 'react';

const InfoCard = ({img, bgClass, cardTitle}) => {
    return (
        <div className={`card lg:card-side shadow-xl px-10 bg-accent ${bgClass}`}>
        <figure><img className='mt-5' src={img} alt="Album" /></figure>
        <div className="card-body text-white ">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    );
};

export default InfoCard;