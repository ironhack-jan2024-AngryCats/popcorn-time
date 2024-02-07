import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {

    return (
        <header className="Header">
            <h1>Welcome to Popcorn Time!</h1>

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>

        </header>
    );
}

export default Header;