import React from 'react';
import appointment from '../../assets/images/appointment.png';
import doctor from "../../assets/images/doctor.png";

const HomeAppointment = () => {
    return (
        <section style={{background:`url(${appointment})`}} className="flex justify-center items-center mt-10 lg:mt-20">
      <div className="flex-1 hidden lg:block">
        <img className="mt-[-130px]" src={doctor} alt="doctor" />
      </div>
      <div className="flex-1 text-white ml-5">
        <h3 className="text-xl text-primary lg:text-center lg:font-bold mt-5 ">Appointment</h3>
        <h2 className="text-3xl lg:text-center lg:font-bold mt-3 mb-5 ">make An Appointment Today</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <div>
          <button className="btn btn-primary mt-5 text-white mb-5">GET STARTED</button>
        </div>
      </div>
    </section>
    );
};

export default HomeAppointment;


