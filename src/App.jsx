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

  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((movieObj) => {
      return movieObj.id !== movieId;
    });
    setMoviesToDisplay(newList);
  }

  return (
    <>

      <Header numberOfMovies={moviesToDisplay.length} />

      <Routes>
        <Route path="/" element={<MovieList moviesToDisplay={moviesToDisplay} callbackToDelete={deleteMovie} />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/about" element={<p>This is the About page</p>} />
        <Route path="*" element={<p>404, this page doesnt exist...</p>} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
