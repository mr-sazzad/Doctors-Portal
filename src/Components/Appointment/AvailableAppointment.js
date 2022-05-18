import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import AppointmentService from "./AppointmentService";
import BookingModal from "./BookingModal";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [bookAppointment, setBookAppointment] = useState({});
  useEffect(() => {
    fetch("http://localhost:5000/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  });
  return (
    <div>
      <p className="text-center font-bold text-secondary">
        AvailableAppointments on {format(date, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {services.map((service) => (
          <AppointmentService
            key={service._id}
            service={service}
            setBookAppointment={setBookAppointment}
          />
        ))}
      </div>
      {bookAppointment && (
        <BookingModal
          date={date}
          bookAppointment={bookAppointment}
          setBookAppointment={setBookAppointment}
        />
      )}
    </div>
  );
};

export default AvailableAppointment;
