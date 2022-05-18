import React from "react";

const AppointmentService = ({ service, setBookAppointment }) => {
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-primary">{service.name}</h2>
        <p>
          {service.slots.length} {service.slots.length > 1 ? "Slots" : "Slot"}{" "}
          available
        </p>
        <p>
          {service.slots.length > 0 ? (
            <span className="text-secondary">{service.slots[0]}</span>
          ) : (
            <span className="text-red-500">No Slot Available</span>
          )}
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setBookAppointment(service)}
            disabled={service.slots.length === 0}
            for="Booking-modal"
            className="btn btn-secondary uppercase"
          >
            Book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
