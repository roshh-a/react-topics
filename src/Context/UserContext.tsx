import React from "react";
import { AuthUserType, ContextProviderProps } from "../Helpers/Model";


// Create a context
export const AuthUser = React.createContext<AuthUserType | null>(null);

// Create a provider for that context
export const AuthContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const userData: AuthUserType = { userName: 'rosh' };
    return (
        <AuthUser.Provider value={userData} >
            {children}
        </AuthUser.Provider>
    );
}