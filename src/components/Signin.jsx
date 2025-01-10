import { useContext } from "react";
import { AuthContext } from "../auth/Auth";
import { Link } from "react-router-dom";
import './Signin.css';

export default function Signin() {
    const { state, setState } = useContext(AuthContext)

    return (
        <div className="signin-ctn">
            <div>
                <div className="credentials-ctn">
                    <p className="credentials">Username: </p>
                    <input type="text"></input>
                </div>
                <div className="credentials-ctn">
                    <p className="credentials">Password: </p>
                    <input type="password"></input>
                </div>
                <div>
                    <Link to="/account"><button onClick={() => setState(!state)} className="signin-btn">Sign In</button></Link>
                    <p>Don't have an account? Sign up <Link to="/signup">here</Link></p>
                </div>
            </div>
        </div>
    );
}