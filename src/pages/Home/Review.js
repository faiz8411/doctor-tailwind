import React from 'react';

const Review = ({ review }) => {
    const { image, name, adress, description } = review;
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <p>{description}</p>
        <div className="card-body items-center text-center">
          <div className='flex'>
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={image} alt="people" />
              </div>
            </div>
            <div>
              <h2 className="card-title">{name}</h2>
              <h6>{adress}</h6>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;