import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import * as C from './style';

const Navbar = () => {
    const { user, signout } = useAuth();
    const navigate = useNavigate();

    const handleSignout = () => {
        signout();
        navigate(0);
    }

    return (
        <>
            <C.Nav>
                <C.Logo>
                    <img src="../assets/logo.png" alt="logo" height="50" width="100" />
                </C.Logo>
                <C.NavLinkContainer>
                    <>
                        <C.NavLink to="/">
                            <h1>Início</h1>
                        </C.NavLink>
                        <C.NavLink to="/">
                            <h1>Evento</h1>
                        </C.NavLink>
                        <C.NavLink to="/">
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
                    </>
                </C.NavLinkContainer>
            </C.Nav>
        </>
    );
}

export default Navbar;