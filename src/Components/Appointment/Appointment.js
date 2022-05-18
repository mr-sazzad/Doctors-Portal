import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import AppointBanner from './AppointBanner';
import AvailableAppointment from './AvailableAppointment';

const Appointment = () => {
  const [date, setDate] = useState(new Date());
  return (
    <div className='mx-12'>
      <AppointBanner date={date} setDate={setDate} />
      <AvailableAppointment date={date} />
      <Footer />
    </div>
  );
};

export default Appointment;