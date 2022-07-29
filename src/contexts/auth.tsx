import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext({});

type User = {
    email: string, password: string
}

export const AuthProvider = () => {
    const [user, setUser] = useState<User | null>();
    
    useEffect(() => {
        const userToken = localStorage.getItem("user_token");
        const usersStorage = localStorage.getItem("users_db");

        if (userToken && usersStorage) {
            const hasUser = JSON.parse(usersStorage)?.filter(
                (user: User) => user.email === JSON.parse(userToken).email
            );

            if (hasUser) setUser(hasUser[0]);
        }
    }, []);

    const signin = (email: string, password: string) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db") as string);

        const hasUser = usersStorage?.filter((user: User) => user.email === email);

        if (hasUser?.length) {
            if (hasUser[0].email === email && hasUser[0].password === password) {
                const token = Math.random().toString(36).substring(2);
                localStorage.setItem("user_token", JSON.stringify({ email, token }));
                setUser({ email, password });
                return;
            } else {
                return "E-mail ou senha incorretos";
            }
        } else {
            return "Usuário não cadastrado";
        }
    };

    const signup = (email: string, password: string) => {
        const usersStorage = JSON.parse(localStorage.getItem("users_db") as string);

        const hasUser = usersStorage?.filter((user: User) => user.email === email);

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

    // return { signin, signup, signout };
    return (
        <AuthContext.Provider
            value={{ user, signed: !!user, signin, signup, signout }}
        />
    );
}