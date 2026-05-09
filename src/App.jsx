import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import initialMovies from "./data/movies";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import "./App.css";

function App() {
  const [movies, setMovies] = useState(initialMovies);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: "",
    trailer: "",
  });

  const handleChange = (e) => {
    setNewMovie({
      ...newMovie,
      [e.target.name]: e.target.value,
    });
  };

  const addMovie = (e) => {
    e.preventDefault();

    if (
      newMovie.title === "" ||
      newMovie.description === "" ||
      newMovie.posterURL === "" ||
      newMovie.rating === "" ||
      newMovie.trailer === ""
    ) {
      alert("Please fill all fields");
      return;
    }

    const movieToAdd = {
      id: Date.now(),
      title: newMovie.title,
      description: newMovie.description,
      posterURL: newMovie.posterURL,
      rating: Number(newMovie.rating),
      trailer: newMovie.trailer,
    };

    setMovies([...movies, movieToAdd]);

    setNewMovie({
      title: "",
      description: "",
      posterURL: "",
      rating: "",
      trailer: "",
    });
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesTitle = movie.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase());

    const matchesRating =
      ratingFilter === "" || movie.rating >= Number(ratingFilter);

    return matchesTitle && matchesRating;
  });

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            movies={filteredMovies}
            titleFilter={titleFilter}
            setTitleFilter={setTitleFilter}
            ratingFilter={ratingFilter}
            setRatingFilter={setRatingFilter}
            newMovie={newMovie}
            handleChange={handleChange}
            addMovie={addMovie}
          />
        }
      />
      <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
    </Routes>
  );
}

export default App;
