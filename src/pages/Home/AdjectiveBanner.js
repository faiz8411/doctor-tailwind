import React from 'react';
import Treatment from "../../images/treatment.png";
const AdjectiveBanner = () => {
    return (
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={Treatment} className="max-w-md rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Exceptional Dental <br /> Care, on Your Terms
            </h1>
            <p className="py-6" style={{fontSize:"16px"}}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <button className="btn btn-secondary text-white">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default AdjectiveBanner;