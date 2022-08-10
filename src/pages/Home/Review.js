import React from 'react';

const Review = ({ review }) => {
    const { image, name, adress, description } = review;
    return (
      <div class="card w-96 bg-base-100 shadow-xl">
        <p>{description}</p>
        <div class="card-body items-center text-center">
          <div className='flex'>
            <div class="avatar">
              <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={image} alt="people" />
              </div>
            </div>
            <div>
              <h2 class="card-title">{name}</h2>
              <h6>{adress}</h6>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;