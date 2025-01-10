import { createContext, useState } from "react";

export const AuthContext = createContext()

export default function Auth({ children }) {
    const [state, setState] = useState(false)

    return (
        <AuthContext.Provider value={{ state, setState }}>
            {children}
        </AuthContext.Provider>
    );
}