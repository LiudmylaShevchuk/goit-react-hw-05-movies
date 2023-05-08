import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'services/fetchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => { 
    const [movies, setMovies] = useState([]);


useEffect(() => {
    getTrendingMovies().then(setMovies);
}, []);

    return (
        <>
            <MoviesList movies={ movies} />
        </>
    );
};