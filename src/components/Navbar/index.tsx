import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { MdMenu } from "react-icons/md";
import * as C from './style';

const Navbar = () => {
    const { user, signout } = useAuth();
    const [toggleMenu, setToggleMenu] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const navigate = useNavigate();

    useEffect(() => {
        const changeWidth = () => setScreenWidth(window.innerWidth);
        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, []);

    const handleSignout = () => {
        signout();
        navigate(0);
    } 

    const handleMenu = () => {
        setToggleMenu((prev) => !prev);
    }

    return (
        <C.Nav>
            {(toggleMenu || screenWidth > 500) && (
                <>
                    <C.Logo>
                        <C.LogoImage src="../assets/logo.png" alt="logo" />
                    </C.Logo>
                    <C.NavLinkContainer>
                        <C.NavLink to="/">
                            <h1>Início</h1>
                        </C.NavLink>
                        <C.NavLink to="#events">
                            <h1>Eventos</h1>
                        </C.NavLink>
                        <C.NavLink to="#contact">
                            <h1>Contato</h1>
                        </C.NavLink>
                        {user !== undefined ?
                            <C.NavLink to="/album-list">
                                <h1>Albuns</h1>
                            </C.NavLink>
                            : <></>
                        }
                        {user === undefined ?
                            (<div>
                                <C.Button to="/signin">Entrar</C.Button>
                            </div>)
                        :
                            (<div>
                                <C.btnSignout onClick={handleSignout}>Sair</C.btnSignout>
                            </div>)
                        }
                        
                    </C.NavLinkContainer>
                </>
            )}
            <C.btnMenuControl onClick={handleMenu}>
                <MdMenu color="C75104" />
            </C.btnMenuControl>
        </C.Nav>
    );
}

export default Navbar;