import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import chair from "../../assets/images/chair.png";

const AppointBanner = ({ date, setDate }) => {
  return (
    <div
      style={{
        background: `url()`,
        backgroundSize: "cover",
      }}
      class="hero lg:h-4/6 h-screen bg-base-100 mb-5 "
    >
      <div class="hero-content flex-col lg:flex-row-reverse">
        <img
          className="lg:ml-32"
          src={chair}
          class="max-w-sm rounded-lg shadow-2xl"
          alt="chair"
        />
        <div className="lg:mr-32">
          <DayPicker mode="single" selected={date} onSelect={setDate} />
        </div>
      </div>
    </div>
  );
};

export default AppointBanner;
