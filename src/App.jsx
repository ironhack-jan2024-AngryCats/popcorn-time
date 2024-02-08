import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";
import Footer from "./components/Footer";

import movies from "./data/movies.json";
import './App.css'


function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");

  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((movieObj) => {
      return movieObj.id !== movieId;
    });
    setMoviesToDisplay(newList);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    
    const movieIds = moviesToDisplay.map( movie => movie.id);
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1;

    const newMovie = {
      id: nextId,
      title: title,
      year: year
    }

    const newList = [newMovie, ...moviesToDisplay];

    setMoviesToDisplay(newList);

    // clear form
    setTitle("");
    setYear("");

  }


  return (
    <>

      <Header numberOfMovies={moviesToDisplay.length} />

      <section className="card">
        <h2>Create a new movie:</h2>

        <form onSubmit={handleSubmit}>
          

          <label>
            Title: 
            <input
              type="text"
              name="title"
              required
              placeholder="Star Wars"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
            />
          </label>

          
          <label>
            Year: 
            <input
              type="number"
              name="year"
              required
              min="1900"
              max="2100"
              placeholder="2020"
              value={year}
              onChange={(e) => { setYear(e.target.value) }}
            />
          </label>
          
          <button>Create</button>
        </form>

      </section>



      <Routes>
        <Route path="/" element={<MovieList moviesToDisplay={moviesToDisplay} callbackToDelete={deleteMovie} />} />
        <Route path="/movies/:movieId" element={<MovieDetails moviesToDisplay={moviesToDisplay} />} />
        <Route path="/about" element={<p>This is the About page</p>} />
        <Route path="*" element={<p>404, this page doesnt exist...</p>} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
