import React from 'react';
import ContactSection from '../../components/ContactSection';
import EventsSection from '../../components/EventsSection';
import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider';
import * as C from './style';

const Home = () => {
    return (
        <>
            <Navbar />
            <C.Container>
                <Slider />
            </C.Container>
            <EventsSection />
            <ContactSection />
        </>
    );
}

export default Home;