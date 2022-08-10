import React from 'react';
import clock from "./../../icons/clock.svg";
import map from "./../../icons/marker.svg";
import phone from "./../../icons/phone.svg";

import InfoCard from './InfoCard';
const Info = () => {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <InfoCard
          img={clock}
          bgClass="bg-accent"
          cardTitle="Opening Hours"
        ></InfoCard>
        <InfoCard
          img={map}
          bgClass="bg-neutral"
          cardTitle="Our Locations"
        ></InfoCard>
        <InfoCard
          bgClass="bg-accent"
          img={phone}
          cardTitle="Contact Us"
        ></InfoCard>
      </div>
    );
};

export default Info;