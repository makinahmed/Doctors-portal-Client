import React from 'react';
import { createContext } from 'react';
import useFirebase from '../../Hooks/useFirebase';
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const allContextValue = useFirebase();
    return (
        <AuthContext.Provider value={allContextValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;