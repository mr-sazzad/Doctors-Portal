import React from "react";
import treatment from "../../assets/images/treatment.png";

const ServiceSecondPart = () => {
  return (
    <div className="lg:mx-20">
      <div className="card lg:card-side bg-base-100 shadow-xl mt-10">
        <figure>
          <img src={treatment} alt="Album" />
        </figure>
        <div className="card-body ml-10 mt-5">
          <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <div className="card-actions justify-start">
            <button className="btn btn-primary mt-5 bg-gradient-to-r from-secondary to primary font-bold text-white">GET STARTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSecondPart;
