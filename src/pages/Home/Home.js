import React from 'react';
import AdjectiveBanner from './AdjectiveBanner';
import Banner from './Banner';
import Contact from './Contact';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Reviews from './Reviews';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-12'> 
        <Banner />
            <Info />
            <Services />
            <AdjectiveBanner />
            <MakeAppointment />
            <Reviews />
            <Contact/>
        </div>
    );
};

export default Home;