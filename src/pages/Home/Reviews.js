import React from 'react';
import qouta from "../../icons/quote.svg";
import people1 from "../../images/people-1.png";
import people2 from "../../images/people-2.png";
import people3 from "../../images/people-3.png";

import Review from './Review';
const Reviews = () => {
    const reviews = [
      {
        _id: 1,
        name: "Winson Herry",
        adress: "california",
        image: people1,
        description:
          "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      },
      {
        _id: 2,
        name: "faul Herry",
        adress: "New York",
        image: people2,
        description:
          "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      },
      {
        _id: 3,
        name: "kane williamson",
        adress: "kinstone",
        image: people3,
        description:
          "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      },
    ];
    return (
      <div className="my-28">
        <div className="flex justify-between ">
          {" "}
          <div className="text-xl font-bold uppercase">
            <h3 className="text-info">Testimonial</h3>
            <h2>What Our Patients Says</h2>
          </div>
          <div className="">
            <img src={qouta} className="w-24 lg:w-48" alt="" />
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 text-center">
          {reviews.map((review) => (
            <Review key={review._id} review={review}></Review>
          ))}
        </div>
      </div>
    );
};

export default Reviews;