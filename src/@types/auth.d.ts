export interface IAuth {
    id: number;
    title: string;
    description: string;
    status: boolean;
}

export interface IUser {
    email: string;
    password: string;
}

export type AuthContextType = {
    user?: IUser;
    signin: (email: string, password: string) => string;
    signup: (email: string, password: string) => string | undefined | void;
    signout: (id: number) => void;
};
