import { useContext } from "react";
import { AuthContext } from "./Auth";
import { Navigate } from "react-router-dom";

export default function ConfidentialRoute({ children }) {
    const { state, setState } = useContext(AuthContext)

    alert("You are not authorised to access this page")
    return (
        <h3 style={{ color: 'red' }}>Access denied.</h3>
    )
}