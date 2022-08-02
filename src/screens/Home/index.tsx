import React from 'react';
import { useNavigate } from "react-router-dom";
import EventsSection from '../../components/EventsSection';
import Navbar from '../../components/Navbar';
import Slider from '../../components/Slider';
import useAuth from '../../hooks/useAuth';
import * as C from './style';

const Home = () => {
    const navigate = useNavigate();
    // const { signout } = useAuth();

    return (
        <>
            <Navbar />
            <C.Container>
                <Slider />
            </C.Container>
            <EventsSection />
        </>
    );
}

export default Home;