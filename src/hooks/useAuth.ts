import { useContext } from "react";
import { AuthContextType } from "../@types/auth";
import { AuthContext } from "../contexts/auth";

const useAuth = () => {
    return useContext(AuthContext) as AuthContextType;
}

export default useAuth;