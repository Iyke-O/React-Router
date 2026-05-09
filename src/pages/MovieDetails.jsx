import { Link, useParams } from "react-router-dom";

function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies.find((movie) => movie.id === Number(id));

  if (!movie) {
    return (
      <div className="details-page">
        <Link to="/" className="back-link">
          Back to Home
        </Link>
        <h1>Movie not found</h1>
      </div>
    );
  }

  return (
    <div className="details-page">
      <Link to="/" className="back-link">
        Back to Home
      </Link>

      <div className="details-layout">
        <img src={movie.posterURL} alt={movie.title} className="details-poster" />

        <div className="details-content">
          <h1>{movie.title}</h1>
          <p>{movie.description}</p>
          <p className="details-rating">Rating: {movie.rating}/5</p>

          <div className="trailer-frame">
            <iframe
              src={movie.trailer}
              title={`${movie.title} trailer`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
