import React, { useState } from 'react';
import { Input, Button } from '../../components';
import * as C from './styles';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Signin = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email || !senha) {
            setError("Preencha todos os campos");
            return;
        }

        signin(email, senha).then((responseMessage) => {
            alert(responseMessage);
            navigate("/");
        });
    }

    return (
        <C.Container>
            <C.Label>LOGIN</C.Label>
            <C.Content>
                <Input
                    type="email"
                    placeholder="Digite seu E-mail"
                    value={email}
                    onChange={(e) => [setEmail(e.target.value), setError("")]}
                />
                <Input
                    type="password"
                    placeholder="Digite sua Senha"
                    value={senha}
                    onChange={(e) => [setSenha(e.target.value), setError("")]}
                />
                <C.LabelError>{error}</C.LabelError>
                <Button text="Entrar" onClick={handleLogin} />
                    <C.Strong>
                        <Link to="/">Retornar</Link>
                    </C.Strong>
            </C.Content>
        </C.Container>
    );
}

export default Signin;