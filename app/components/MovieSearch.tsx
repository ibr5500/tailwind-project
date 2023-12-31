"use client"

import { useState } from 'react'
import {searchMovies} from '../services/movie.service';
import MovieCard from './MovieCard';
import SearchBar from './SearchBar';

const MovieSearch = () => {
  const [movies, setMovies] = useState([]);

  const handelSearch = async (query :string) => {
    const res = await searchMovies(query);
    setMovies(res);
  }

  return (
    <div>
      <SearchBar onSearch={handelSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {movies.map((movie :any) => (
          <MovieCard
            key={movie.id}
            title={movie.title}
            overview={movie.overview}
            posterPath={movie.poster_path}
          />
        ))}
      </div>
    </div>
  );
};

export default MovieSearch;
