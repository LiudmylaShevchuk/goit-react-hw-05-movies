import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getMovieByName } from "services/fetchMovies";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Searcher } from "components/Searcher/Searcher";


export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const query = searchParams.get('query') ?? '';
    if (!query) {
      return;
    }
    getMovieByName(query).then(setMovies);
  }, [searchParams]);

  const handleChange = e => {
    setQuery(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchParams(query !== '' ? { query } : {});
  };

  return (
    <>
      <Searcher onSubmit={handleSubmit} onChange={handleChange} />
      <MoviesList movies={movies} />
    </>
  );
};