import React from 'react';

const InfoCard = ({img, bgClass, cardTitle}) => {
    return (
        <div class={`card lg:card-side shadow-xl px-10 bg-accent ${bgClass}`}>
        <figure><img className='mt-5' src={img} alt="Album" /></figure>
        <div class="card-body text-white ">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
        </div>
      </div>
    );
};

export default InfoCard;