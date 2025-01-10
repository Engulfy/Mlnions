import './Navbar.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../auth/Auth';
import { useContext } from 'react';

export default function Navbar() {
    const { state, setState } = useContext(AuthContext)
    const items = [{
        name: "Home",
        link: "/"
    }, {
        name: "Upload & Submit",
        link: "/upload"
    }, {
        name: "Admin Panel",
        link: "/admin"
    }, {
        name: state ? "Account" : "Sign in",
        link: state ? "/account" : "/signin"
    }];

    return (
        <nav className="navbar">
            <Link to="/">
                <img className="logo-img"
                    src="../../logos/logo.png"></img>
            </Link>
            <ul>
                {items.map((x, index) => {
                    return (
                        <li key={index} className="navbar-items">
                            <Link to={x.link}>{x.name}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    );
}