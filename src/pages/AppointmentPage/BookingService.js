import React from 'react';

const BookingService = ({ service, setTreatment }) => {
  const { _id, Name, slots } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-accent">{Name}</h2>
        <p>
          {slots.length > 0 ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Not available</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "Space"} spaces
          available{" "}
        </p>
        <div className="card-actions justify-center">
          
           
           
           
          
          <label  disabled={slots.length === 0} onClick={() => setTreatment(service)} for="booking-modal" className="btn btn-accent text-white">
             Book Appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default BookingService;