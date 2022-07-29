import React from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';
import useAuth from '../../hooks/useAuth';
import * as C from './style';

const Home = () => {
    const navigate = useNavigate();
    // const { signout } = useAuth();

    return (
        <>
            <Navbar />
            <C.Container />
        </>
    );
}

export default Home;