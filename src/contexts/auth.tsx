import React, { createContext, useEffect, useState } from "react";
import { IUser, AuthContextType, ErrorSigninResponse, SuccessSigninResponse } from "../@types/auth";
import { logInWithEmailAndPassword } from "../firebase";

export const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
    children?: React.ReactNode
}

const AuthProvider: React.FC<Props> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>();
    
    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user: IUser) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signin = async (email: string, password: string) => {
        const user = await logInWithEmailAndPassword(email, password);

        if (user) {
            const token = Math.random().toString(36).substring(2);
            localStorage.setItem("user_token", JSON.stringify({ email, token }));
            setUser({ email, password });
            return SuccessSigninResponse.Success;
        } else {
            return ErrorSigninResponse.UserNotFound;
        }
    };

    const signup = (email: string, password: string) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db") as string);

        const hasUser = usersStorage?.filter((user: IUser) => user.email === email);

        if (hasUser?.length) return "Já tem uma conta com esse E-mail";

        let newUser;

        if (usersStorage) {
            newUser = [...usersStorage, { email, password }];
        } else {
            newUser = [{ email, password }];
        }

        localStorage.setItem("users_db", JSON.stringify(newUser));

        return;
    };

    const signout = () => {
        setUser(null);
        localStorage.removeItem("user_token");
    }

    return (
        <AuthContext.Provider value={{ user, signed: !!user, signin, signup, signout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;