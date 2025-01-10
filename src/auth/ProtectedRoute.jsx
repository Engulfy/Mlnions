import { useContext } from "react";
import { AuthContext } from "./Auth";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const { state, setState } = useContext(AuthContext)

    if (!state) {
        alert("You need to log in first")
        return <Navigate to="/signin" replace />
    }

    return children
}