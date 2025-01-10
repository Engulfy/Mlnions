import { Link } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../auth/Auth"

export default function Signup() {
    const { state, setState } = useContext(AuthContext)

    return (
        <>
            <div className="signin-ctn">
                <h4 style={{ textAlign: "left", color: '#256fa1ff' }}>Create an account:</h4>
                <div className="credentials-ctn">
                    <p className="credentials">Username: </p>
                    <input type="text"></input>
                </div>
                <div className="credentials-ctn">
                    <p className="credentials">Email: </p>
                    <input type="email"></input>
                </div>
                <div className="credentials-ctn">
                    <p className="credentials">Password: </p>
                    <input type="password"></input>
                </div>
                <Link to="/account"><button onClick={() => setState(!state)} className="signin-btn">Sign Up</button></Link>
            </div>
        </>
    )
}