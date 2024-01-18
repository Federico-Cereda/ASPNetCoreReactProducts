import { PropsWithChildren, createContext, useState } from "react";
import { AuthContextType, IAuth } from "../../model";

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: PropsWithChildren<IAuth>) => {
    const [auth, setAuth] = useState<AuthContextType['auth']>(Object);

    return (
        <AuthContext.Provider value={ { auth, setAuth } }>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthContext;