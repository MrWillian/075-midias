import React from 'react';
import * as C from './style';

const Navbar = () => {
    return (
        <>
            <C.Nav>
                <C.Logo>
                    <img src="../assets/logo.png" height="50" width="100" />
                </C.Logo>
                <C.NavLinkContainer>
                    <C.NavLink to="/">
                        <h1>Início</h1>
                    </C.NavLink>
                    <C.NavLink to="/">
                        <h1>Evento</h1>
                    </C.NavLink>
                    <C.NavLink to="/">
                        <h1>Contato</h1>
                    </C.NavLink>
                    <C.NavLink to="/">
                        <C.Button to="/">Entrar</C.Button>
                    </C.NavLink>
                </C.NavLinkContainer>
            </C.Nav>
        </>
    );
}

export default Navbar;