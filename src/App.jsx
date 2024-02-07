import Header from "./components/Header";
import Footer from "./components/Footer";
import MovieList from "./components/MovieList";
import './App.css'
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";

function App() {

  return (
    <>

      <Header />

      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="/about" element={<p>This is the About page</p>} />
        <Route path="*" element={<p>404, this page doesnt exist...</p>} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
