import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie)=>(
        <div key={movie.title}>
          <h3>{movie.title}</h3>
          <h4>Movie Length: {movie.time} minutes</h4>
          <p>Genre: </p>

          <ul>
            {movie.genres.map((genre)=>(
              <li key={genre}>{genre}</li>
            ))}
          </ul>

        </div>
        ))}
    </div>
  );
};

export default Movies;
