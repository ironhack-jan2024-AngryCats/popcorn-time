import { NavLink } from "react-router-dom";
import "./Header.css";

function Header(props) {

    let title = "";
    if (props.numberOfMovies > 0) {
        title = <h2>Number of movies: {props.numberOfMovies}</h2>;
    } else {
        title = <h2>Sorry, no movies to display</h2>
    }

    return (
        <header className="Header">
            <h1>Welcome to Popcorn Time!</h1>
            {title}

            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>

        </header>
    );
}

export default Header;