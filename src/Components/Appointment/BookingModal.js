import { format } from "date-fns";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from 'react-toastify';
import auth from "../../firebase.init";



const BookingModal = ({ bookAppointment, date, setBookAppointment }) => {
  const { _id, name, slots } = bookAppointment;
  const [user, , ] = useAuthState(auth);
  const formattedData = format(date, "PP");
  
  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target?.timeSlot?.value;
    const name = e.target?.name.value;
    const phone = e.target?.phone.value;
  
    
    const booking = {
      bookAppointmentId: _id,
      bookAppointmentName: name,
      date: formattedData,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: phone,
    }
    fetch('http://localhost:5000/booking', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          toast(`Appointment is set on, ${formattedData} at ${slot}`)
          console.log(data);
        } else {
          console.log(data);
          toast.error(`already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`)
        }
    })
    setBookAppointment(null);
    
  };
 
  return (
    <div>
      <input type="checkbox" id="Booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="Booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary text-center">
            {name}
          </h3>

          <form onSubmit={handleBooking}>
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs mb-2 block mx-auto"
            />
            <select
              name="timeSlot"
              className="select select-bordered w-full max-w-xs mb-2 block mx-auto"
            >
              {slots?.map((singleSlot, index) => (
                <option key={index} value={singleSlot}>
                  {" "}
                  {singleSlot}{" "}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName}
              className="input input-bordered w-full max-w-xs mb-2 block mx-auto"
            />
            <input
              type="email"
              disabled
              value={user?.email}
              className="input input-bordered w-full max-w-xs mb-2 block mx-auto"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
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
