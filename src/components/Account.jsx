import { useContext } from "react";
import { AuthContext } from "../auth/Auth";
import { Link } from "react-router-dom";

export default function Account() {
    const { state, setState } = useContext(AuthContext)

    return (
        <>
            <span style={{ paddingRight: 5 }}>Welcome back, user</span>
            <span style={{ color: 'red' }}>(Account not verified)</span>
            <p>Proceed to <Link to="/upload">verify now!</Link></p>
            <Link to="/signin"><button onClick={() => setState(!state)} className="signout-btn">Sign Out</button></Link>
        </>
    );
}