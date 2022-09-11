import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import BookingService from './BookingService';

const AvailableAppointments = ({ date }) => {
    
    const [services, setServices] = useState([])
    const [treatment,setTreatment]=useState(null)
    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
        .then(data=>setServices(data))
        
        
   },[])
    return (
      <div>
        <h1 className="text-2xl text-center text-accent">
          available appointment on {format(date, "PP")}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <BookingService
              key={service._id}
              service={service}
              setTreatment={setTreatment}
            ></BookingService>
          ))}
            </div>
            {treatment&&<BookingModal date={date} setTreatment={setTreatment} treatment={treatment}></BookingModal>}
      </div>
    );
};

export default AvailableAppointments;