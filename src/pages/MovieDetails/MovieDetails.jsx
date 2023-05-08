import { Outlet, useLocation, useParams } from "react-router-dom";
import { Suspense, useEffect, useState } from "react";
import { getMovieDetails } from "services/fetchMovies";
import { MovieCard } from "components/MovieCard/MovieCard";
import { BackShift, AddInfo, Container } from './MovieDetails.styled';

export const MovieDetails = () => { 
    const [movieDetails, setMovieDetails] = useState(null);
    const { movieId } = useParams();
    const location = useLocation();

    useEffect(() => {
        getMovieDetails(movieId).then(setMovieDetails);
    }, [movieId]);

    if (!movieDetails) { 
        return null;
    }

    const backShift = location.state?.from ?? '/';

    return (
        <>
            <BackShift to={backShift}>← Go back</BackShift>
            <MovieCard movie={movieDetails} />
            <Container>
                <AddInfo to={'cast'} state={{ from: backShift }}>Cast</AddInfo>
                <AddInfo to={'reviews'} state={{from: backShift}}>Reviews</AddInfo>
            </Container>

            <Suspense>
                <Outlet />
            </Suspense>
        </>
    );
};