import { Link, useParams } from "react-router-dom";
import movies from "../data/movies.json"

function MovieDetails() {

    const { movieId } = useParams();

    const movieDetails = movies.find((element) => {
        return element.id == movieId;
    });

    return (
        <section className="MovieDetails">
            <h1>{movieDetails.title}</h1>

            {movieDetails.imgURL
                ? <img src={movieDetails.imgURL} />
                : <img src="https://dummyimage.com/182x268/ffffff/000000" />
            }

            <h3>Year: {movieDetails.year}</h3>
            <h3>Rating: {movieDetails.rating}</h3>
            <h3>Genres: {movieDetails.genres.map( (str, index) => <span className="badge" key={index}>{str}</span> )}</h3>

            <br />
            <Link to="/">Back to Homepage</Link>

        </section>
    )
}

export default MovieDetails;