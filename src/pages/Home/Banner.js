import React from 'react';
import chair from "../../images/chair.png";
const Banner = () => {
    return (
      <div className="hero min-h-screen bg-base-200  bg-[url('/src/images/bg.png')]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-md rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              Your New Smiles Starts <br /> Here
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary uppercase bg-gradient-to-r from-cyan-500 to-blue-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
};

export default Banner;