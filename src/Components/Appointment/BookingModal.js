import { format } from "date-fns";
import React from "react";

const BookingModal = ({ bookAppointment, date, setBookAppointment }) => {
  const handleBooking = e => {
    e.preventDefault();
    const slot = e.target?.timeSlot?.value;
    const name = e.target?.name.value;
    const phone = e.target?.phone.value;
    console.log(slot, "Appointment name : " + bookAppointment.name, "Appointment id : " + bookAppointment._id, name, phone);
    setBookAppointment(null)
  }
  return (
    <div>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            for="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary text-center">
            {bookAppointment.name}
          </h3>
         
          <form onSubmit={handleBooking}>   
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs mb-2 block mx-auto"
            />
            <select name="timeSlot" className="select select-bordered w-full max-w-xs mb-2 block mx-auto">
              {
                bookAppointment?.slots?.map(singleSlot => <option value={singleSlot}> {singleSlot} </option>)
              }
            </select>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="input input-bordered w-full max-w-xs mb-2 block mx-auto"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs mb-2 block mx-auto"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs mb-2 block mx-auto"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-secondary w-full max-w-xs mb-2 block mx-auto"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
