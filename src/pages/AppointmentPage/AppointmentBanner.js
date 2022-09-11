import React from 'react';
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import AppointmentBa from "../../images/chair.png";

const AppointmentBanner = ({date,setDate}) => {
    
    return (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={AppointmentBa}
            className="max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
          </div>
        </div>
      </div>
    );
};

export default AppointmentBanner;