import React from 'react';
import clock from '../../assets/icons/clock.svg';
import Marker from '../../assets/icons/marker.svg';
import Phone from '../../assets/icons/phone.svg';
import InfoCard from '../InfoCard/InfoCard';

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard cardTitle='Opening Hour' bgClass="bg-gradient-to-r from-secondary to-primary" img={clock}/>
            <InfoCard cardTitle='Visit Our Location' bgClass='bg-accent' img={Marker}/>
            <InfoCard cardTitle='Contact Us Now' bgClass="bg-gradient-to-r from-secondary to-primary" img={Phone}/>
        </div>
    );
};

export default Info;