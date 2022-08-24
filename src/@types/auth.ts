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

export enum SuccessSigninResponse {
    Success =  "Usuário Logado com Sucesso!"
}

export enum ErrorSigninResponse {
    WrongEmailOrPassword =  "E-mail ou senha incorretos",
    UserNotFound = "Usuário não cadastrado",
}

export type AuthContextType = {
    user?: IUser | null;
    signed: boolean;
    signin: (email: string, password: string) => Promise<SuccessSigninResponse | ErrorSigninResponse | undefined>;
    signup: (email: string, password: string) => string | undefined | void;
    signout: () => void;
};
