import { Link } from "react-router-dom";

function MovieList(props){

    return(
        <section className="MovieList">

            {props.moviesToDisplay.map( (movieDetails) => {
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
                            <button onClick={() => {props.callbackToDelete(movieDetails.id)}}>Delete</button>
                        </p>

                    </div>
                );
            })}

        </section>
    );
}

export default MovieList;