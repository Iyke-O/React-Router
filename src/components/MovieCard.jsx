import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <img src={movie.posterURL} alt={movie.title} />

      <h2>{movie.title}</h2>

      <p>Rating: {movie.rating}</p>
    </Link>
  );
}

export default MovieCard;