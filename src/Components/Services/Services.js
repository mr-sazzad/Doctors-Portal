import React from "react";
import cavity from '../../assets/images/cavity.png';
import fluoride from '../../assets/images/fluoride.png';
import whitening from '../../assets/images/whitening.png';
import Service from "../Service/Service";

const Services = () => {
    const Services = [
        {
            _id: 1,
            title: "Fluoride Treatment",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: fluoride
            
        },
        {
            _id: 1,
            title: "Cavity Filling",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: cavity
            
        },
        {
            _id: 1,
            title: "Keep Whitening",
            description: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
            img: whitening
            
        },
    ]
  return (
    <div>
      <h1 className="text-center text-primary text-2xl font-bold mt-32 mx-10">
        OUR SERVICES
      </h1>
      <h1 className="text-center text-2xl mb-10 mt-5">SERVICES WE PROVIDE</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {
                  Services.map(service => <Service key={service._id} service={service} />)
              }
      </div>
    </div>
  );
};

export default Services;
