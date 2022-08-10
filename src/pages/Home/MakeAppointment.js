import React from 'react';
import Appointment from "../../images/appointment.png";
import doctor from "../../images/doctor.png";
const MakeAppointment = () => {
    return (
      <section
        style={{
          background: `url(${Appointment})`,
        }}
        className="flex justify-center items-center mt-14"
      >
        <div className="flex-1">
          <img className='mt-[-100px]' src={doctor} alt="" />
        </div>
        <div className="flex-1 ">
          <h5 className="text-secondary">Appointment</h5>
          <div className="text-white">
            <h2 className="text-3xl">Make an appointment Today</h2>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
          </div>
          <button className="btn btn-secondary text-white">Get Started</button>
        </div>
      </section>
    );
};

export default MakeAppointment;