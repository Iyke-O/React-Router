import Filter from "../components/Filter";
import MovieList from "../components/MovieList";

function Home({
  movies,
  titleFilter,
  setTitleFilter,
  ratingFilter,
  setRatingFilter,
  newMovie,
  handleChange,
  addMovie,
}) {
  return (
    <div className="app">
      <h1>Favorite Movies App</h1>

      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      <form className="movie-form" onSubmit={addMovie}>
        <h2>Add New Movie</h2>

        <input
          type="text"
          name="title"
          placeholder="Movie title"
          value={newMovie.title}
          onChange={handleChange}
        />

        <input
          type="text"
          name="description"
          placeholder="Movie description"
          value={newMovie.description}
          onChange={handleChange}
        />

        <input
          type="text"
          name="posterURL"
          placeholder="Poster image URL"
          value={newMovie.posterURL}
          onChange={handleChange}
        />

        <input
          type="text"
          name="trailer"
          placeholder="Trailer embed URL"
          value={newMovie.trailer}
          onChange={handleChange}
        />

        <input
          type="number"
          name="rating"
          placeholder="Rating"
          min="1"
          max="5"
          value={newMovie.rating}
          onChange={handleChange}
        />

        <button type="submit">Add Movie</button>
      </form>

      <MovieList movies={movies} />
    </div>
  );
}

export default Home;
