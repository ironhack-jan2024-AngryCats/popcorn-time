import { useState } from "react";
import movies from "../data/movies.json"
import { Link } from "react-router-dom";

function MovieList(){

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    let title = "";
    if(moviesToDisplay.length > 0){
        title = <h2>Number of movies: {moviesToDisplay.length}</h2>;
    } else {
        title = <h2>Sorry, no movies to display</h2>
    }

    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter((movieObj) => {
            return movieObj.id !== movieId;
        });
        setMoviesToDisplay(newList);
    }

    return(
        <section className="MovieList">

            {title}

            {moviesToDisplay.map( (movieDetails) => {
                return(
                    <div key={movieDetails.id} className="movie card">
                        <h2>Title: {movieDetails.title}</h2>

                        {movieDetails.imgURL 
                            ? <img src={movieDetails.imgURL} /> 
                            : <img src="https://dummyimage.com/182x268/ffffff/000000" />
                        }

                        
                        {movieDetails.rating > 8 && <p>RECOMMENDED</p>}

                        <p>
                            <Link to={`/movies/${movieDetails.id}`}>More Details</Link>
                        </p>
                        
                        <p>
                            <button onClick={() => {deleteMovie(movieDetails.id)}}>Delete</button>
                        </p>

                    </div>
                );
            })}

        </section>
    );
}

export default MovieList;