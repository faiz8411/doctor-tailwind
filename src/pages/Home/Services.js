import React from 'react';
import Cavity from "../../images/cavity.png";
import fluoride from "../../images/fluoride.png";
import Teeth from "../../images/whitening.png";
import Service from './Service';
const Services = () => {
    const serv = [
      {
        _id: 1,
        name: "Fluoride Treatment",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        image: fluoride,
      },
      {
        _id: 2,
        name: "Cavity  Filling",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",
        image: Cavity,
      },
      {
        _id: 3,
        name: "Teeth Whitening",
        description:
          "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the",

        image: Teeth,
      },
    ];
    return (
      <div className="my-28 ">
        <div className="text-center text-xl font-bold uppercase">
          <h3 className="text-info">our services</h3>
          <h2>Service We Provide</h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {serv.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;